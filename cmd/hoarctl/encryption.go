package main

import (
	"context"
	"fmt"
	"io/ioutil"
	"os"

	cli "github.com/jawher/mow.cli"
	"github.com/monax/hoard"
	"github.com/monax/hoard/reference"
)

// Decrypt does what it says on the tin
func (client *Client) Decrypt(cmd *cli.Cmd) {
	secretKey := addOpt(cmd, "key", secretOpt, "").(*string)
	salt := addOpt(cmd, "salt", saltOpt, "").(*string)

	cmd.Action = func() {
		encryptedData := readData()
		plaintext, err := client.encryption.Decrypt(context.Background(),
			&hoard.ReferenceAndCiphertext{
				Reference: &reference.Ref{
					SecretKey: readBase64(*secretKey),
					Salt:      parseSalt(*salt),
				},
				Ciphertext: &hoard.Ciphertext{
					EncryptedData: encryptedData,
				},
			})
		if err != nil {
			fatalf("error decrypting: %v", err)
		}
		os.Stdout.Write(plaintext.Data)
	}
}

// Encrypt also does what it says on the tin
func (client *Client) Encrypt(cmd *cli.Cmd) {
	salt := addOpt(cmd, "salt", saltOpt, "").(*string)

	cmd.Action = func() {
		data, err := ioutil.ReadAll(os.Stdin)
		if err != nil {
			fatalf("could read bytes from STDIN to store: %v", err)
		}
		refAndCiphertext, err := client.encryption.Encrypt(context.Background(),
			&hoard.Plaintext{
				Data: data,
				Salt: parseSalt(*salt),
			})
		if err != nil {
			fatalf("error encrypting: %v", err)
		}
		os.Stdout.Write(refAndCiphertext.Ciphertext.EncryptedData)
	}
}

// Ref encrypts as above, but then packages the data in a ref
func (client *Client) Ref(cmd *cli.Cmd) {
	salt := addOpt(cmd, "salt", saltOpt, "").(*string)

	cmd.Action = func() {
		data := readData()
		refAndCiphertext, err := client.encryption.Encrypt(context.Background(),
			&hoard.Plaintext{
				Data: data,
				Salt: parseSalt(*salt),
			})
		if err != nil {
			fatalf("error generating reference: %v", err)
		}
		fmt.Printf("%s\n", jsonString(refAndCiphertext.Reference))
	}
}
