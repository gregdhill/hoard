package main

import (
	"context"
	"fmt"
	"io/ioutil"
	"os"

	cli "github.com/jawher/mow.cli"
	"github.com/monax/hoard/v4/reference"
	"github.com/monax/hoard/v4/services"
)

// Decrypt does what it says on the tin
func (client *Client) Decrypt(cmd *cli.Cmd) {
	secretKey := addStringOpt(cmd, "key", secretOpt)
	salt := addStringOpt(cmd, "salt", saltOpt)

	cmd.Action = func() {
		encryptedData := readData()
		plaintext, err := client.encryption.Decrypt(context.Background(),
			&services.ReferenceAndCiphertext{
				Reference: &reference.Ref{
					SecretKey: readBase64(secretKey),
					Salt:      parseSalt(salt),
				},
				Ciphertext: &services.Ciphertext{
					EncryptedData: encryptedData,
				},
			})
		if err != nil {
			fatalf("Error decrypting: %v", err)
		}
		os.Stdout.Write(plaintext.Data)
	}
}

// Encrypt also does what it says on the tin
func (client *Client) Encrypt(cmd *cli.Cmd) {
	salt := addStringOpt(cmd, "salt", saltOpt)

	cmd.Action = func() {
		data, err := ioutil.ReadAll(os.Stdin)
		if err != nil {
			fatalf("could read bytes from STDIN to store: %v", err)
		}
		refAndCiphertext, err := client.encryption.Encrypt(context.Background(),
			&services.Plaintext{
				Data: data,
				Salt: parseSalt(salt),
			})
		if err != nil {
			fatalf("Error encrypting: %v", err)
		}
		os.Stdout.Write(refAndCiphertext.Ciphertext.EncryptedData)
	}
}

// Ref encrypts as above, but then packages the data in a ref
func (client *Client) Ref(cmd *cli.Cmd) {
	salt := addStringOpt(cmd, "salt", saltOpt)

	cmd.Action = func() {
		data := readData()
		refAndCiphertext, err := client.encryption.Encrypt(context.Background(),
			&services.Plaintext{
				Data: data,
				Salt: parseSalt(salt),
			})
		if err != nil {
			fatalf("Error generating reference: %v", err)
		}
		fmt.Printf("%s\n", jsonString(refAndCiphertext.Reference))
	}
}
