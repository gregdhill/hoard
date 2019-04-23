// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: grant.proto

package grant // import "github.com/monax/hoard/v3/grant"

import proto "github.com/gogo/protobuf/proto"
import fmt "fmt"
import math "math"
import _ "github.com/gogo/protobuf/gogoproto"

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion2 // please upgrade the proto package

type Grant struct {
	// The grantSpec provides sufficient information to decrypt the reference
	// if hoard has access to the requisite secret
	Spec                 *Spec    `protobuf:"bytes,1,opt,name=Spec" json:"Spec,omitempty"`
	EncryptedReference   []byte   `protobuf:"bytes,2,opt,name=EncryptedReference,proto3" json:"EncryptedReference,omitempty"`
	Version              int32    `protobuf:"varint,3,opt,name=Version,proto3" json:"Version,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *Grant) Reset()         { *m = Grant{} }
func (m *Grant) String() string { return proto.CompactTextString(m) }
func (*Grant) ProtoMessage()    {}
func (*Grant) Descriptor() ([]byte, []int) {
	return fileDescriptor_grant_28f4a44d458e3c64, []int{0}
}
func (m *Grant) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Grant.Unmarshal(m, b)
}
func (m *Grant) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Grant.Marshal(b, m, deterministic)
}
func (dst *Grant) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Grant.Merge(dst, src)
}
func (m *Grant) XXX_Size() int {
	return xxx_messageInfo_Grant.Size(m)
}
func (m *Grant) XXX_DiscardUnknown() {
	xxx_messageInfo_Grant.DiscardUnknown(m)
}

var xxx_messageInfo_Grant proto.InternalMessageInfo

func (m *Grant) GetSpec() *Spec {
	if m != nil {
		return m.Spec
	}
	return nil
}

func (m *Grant) GetEncryptedReference() []byte {
	if m != nil {
		return m.EncryptedReference
	}
	return nil
}

func (m *Grant) GetVersion() int32 {
	if m != nil {
		return m.Version
	}
	return 0
}

type Spec struct {
	Plaintext            *PlaintextSpec `protobuf:"bytes,1,opt,name=Plaintext" json:"Plaintext,omitempty"`
	Symmetric            *SymmetricSpec `protobuf:"bytes,2,opt,name=Symmetric" json:"Symmetric,omitempty"`
	OpenPGP              *OpenPGPSpec   `protobuf:"bytes,3,opt,name=OpenPGP" json:"OpenPGP,omitempty"`
	XXX_NoUnkeyedLiteral struct{}       `json:"-"`
	XXX_unrecognized     []byte         `json:"-"`
	XXX_sizecache        int32          `json:"-"`
}

func (m *Spec) Reset()         { *m = Spec{} }
func (m *Spec) String() string { return proto.CompactTextString(m) }
func (*Spec) ProtoMessage()    {}
func (*Spec) Descriptor() ([]byte, []int) {
	return fileDescriptor_grant_28f4a44d458e3c64, []int{1}
}
func (m *Spec) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Spec.Unmarshal(m, b)
}
func (m *Spec) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Spec.Marshal(b, m, deterministic)
}
func (dst *Spec) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Spec.Merge(dst, src)
}
func (m *Spec) XXX_Size() int {
	return xxx_messageInfo_Spec.Size(m)
}
func (m *Spec) XXX_DiscardUnknown() {
	xxx_messageInfo_Spec.DiscardUnknown(m)
}

var xxx_messageInfo_Spec proto.InternalMessageInfo

func (m *Spec) GetPlaintext() *PlaintextSpec {
	if m != nil {
		return m.Plaintext
	}
	return nil
}

func (m *Spec) GetSymmetric() *SymmetricSpec {
	if m != nil {
		return m.Symmetric
	}
	return nil
}

func (m *Spec) GetOpenPGP() *OpenPGPSpec {
	if m != nil {
		return m.OpenPGP
	}
	return nil
}

type PlaintextSpec struct {
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *PlaintextSpec) Reset()         { *m = PlaintextSpec{} }
func (m *PlaintextSpec) String() string { return proto.CompactTextString(m) }
func (*PlaintextSpec) ProtoMessage()    {}
func (*PlaintextSpec) Descriptor() ([]byte, []int) {
	return fileDescriptor_grant_28f4a44d458e3c64, []int{2}
}
func (m *PlaintextSpec) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_PlaintextSpec.Unmarshal(m, b)
}
func (m *PlaintextSpec) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_PlaintextSpec.Marshal(b, m, deterministic)
}
func (dst *PlaintextSpec) XXX_Merge(src proto.Message) {
	xxx_messageInfo_PlaintextSpec.Merge(dst, src)
}
func (m *PlaintextSpec) XXX_Size() int {
	return xxx_messageInfo_PlaintextSpec.Size(m)
}
func (m *PlaintextSpec) XXX_DiscardUnknown() {
	xxx_messageInfo_PlaintextSpec.DiscardUnknown(m)
}

var xxx_messageInfo_PlaintextSpec proto.InternalMessageInfo

type SymmetricSpec struct {
	// A non-secret identifier for a secret that is 'known' to Hoard (accessible via store or config)
	PublicID             string   `protobuf:"bytes,1,opt,name=PublicID,proto3" json:"PublicID,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *SymmetricSpec) Reset()         { *m = SymmetricSpec{} }
func (m *SymmetricSpec) String() string { return proto.CompactTextString(m) }
func (*SymmetricSpec) ProtoMessage()    {}
func (*SymmetricSpec) Descriptor() ([]byte, []int) {
	return fileDescriptor_grant_28f4a44d458e3c64, []int{3}
}
func (m *SymmetricSpec) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_SymmetricSpec.Unmarshal(m, b)
}
func (m *SymmetricSpec) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_SymmetricSpec.Marshal(b, m, deterministic)
}
func (dst *SymmetricSpec) XXX_Merge(src proto.Message) {
	xxx_messageInfo_SymmetricSpec.Merge(dst, src)
}
func (m *SymmetricSpec) XXX_Size() int {
	return xxx_messageInfo_SymmetricSpec.Size(m)
}
func (m *SymmetricSpec) XXX_DiscardUnknown() {
	xxx_messageInfo_SymmetricSpec.DiscardUnknown(m)
}

var xxx_messageInfo_SymmetricSpec proto.InternalMessageInfo

func (m *SymmetricSpec) GetPublicID() string {
	if m != nil {
		return m.PublicID
	}
	return ""
}

type OpenPGPSpec struct {
	PublicKey            string   `protobuf:"bytes,1,opt,name=PublicKey,proto3" json:"PublicKey,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *OpenPGPSpec) Reset()         { *m = OpenPGPSpec{} }
func (m *OpenPGPSpec) String() string { return proto.CompactTextString(m) }
func (*OpenPGPSpec) ProtoMessage()    {}
func (*OpenPGPSpec) Descriptor() ([]byte, []int) {
	return fileDescriptor_grant_28f4a44d458e3c64, []int{4}
}
func (m *OpenPGPSpec) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_OpenPGPSpec.Unmarshal(m, b)
}
func (m *OpenPGPSpec) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_OpenPGPSpec.Marshal(b, m, deterministic)
}
func (dst *OpenPGPSpec) XXX_Merge(src proto.Message) {
	xxx_messageInfo_OpenPGPSpec.Merge(dst, src)
}
func (m *OpenPGPSpec) XXX_Size() int {
	return xxx_messageInfo_OpenPGPSpec.Size(m)
}
func (m *OpenPGPSpec) XXX_DiscardUnknown() {
	xxx_messageInfo_OpenPGPSpec.DiscardUnknown(m)
}

var xxx_messageInfo_OpenPGPSpec proto.InternalMessageInfo

func (m *OpenPGPSpec) GetPublicKey() string {
	if m != nil {
		return m.PublicKey
	}
	return ""
}

func init() {
	proto.RegisterType((*Grant)(nil), "grant.Grant")
	proto.RegisterType((*Spec)(nil), "grant.Spec")
	proto.RegisterType((*PlaintextSpec)(nil), "grant.PlaintextSpec")
	proto.RegisterType((*SymmetricSpec)(nil), "grant.SymmetricSpec")
	proto.RegisterType((*OpenPGPSpec)(nil), "grant.OpenPGPSpec")
}
func (m *Grant) ProtoSize() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.Spec != nil {
		l = m.Spec.ProtoSize()
		n += 1 + l + sovGrant(uint64(l))
	}
	l = len(m.EncryptedReference)
	if l > 0 {
		n += 1 + l + sovGrant(uint64(l))
	}
	if m.Version != 0 {
		n += 1 + sovGrant(uint64(m.Version))
	}
	if m.XXX_unrecognized != nil {
		n += len(m.XXX_unrecognized)
	}
	return n
}

func (m *Spec) ProtoSize() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.Plaintext != nil {
		l = m.Plaintext.ProtoSize()
		n += 1 + l + sovGrant(uint64(l))
	}
	if m.Symmetric != nil {
		l = m.Symmetric.ProtoSize()
		n += 1 + l + sovGrant(uint64(l))
	}
	if m.OpenPGP != nil {
		l = m.OpenPGP.ProtoSize()
		n += 1 + l + sovGrant(uint64(l))
	}
	if m.XXX_unrecognized != nil {
		n += len(m.XXX_unrecognized)
	}
	return n
}

func (m *PlaintextSpec) ProtoSize() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.XXX_unrecognized != nil {
		n += len(m.XXX_unrecognized)
	}
	return n
}

func (m *SymmetricSpec) ProtoSize() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.PublicID)
	if l > 0 {
		n += 1 + l + sovGrant(uint64(l))
	}
	if m.XXX_unrecognized != nil {
		n += len(m.XXX_unrecognized)
	}
	return n
}

func (m *OpenPGPSpec) ProtoSize() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.PublicKey)
	if l > 0 {
		n += 1 + l + sovGrant(uint64(l))
	}
	if m.XXX_unrecognized != nil {
		n += len(m.XXX_unrecognized)
	}
	return n
}

func sovGrant(x uint64) (n int) {
	for {
		n++
		x >>= 7
		if x == 0 {
			break
		}
	}
	return n
}
func sozGrant(x uint64) (n int) {
	return sovGrant(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (this *Spec) GetValue() interface{} {
	if this.Plaintext != nil {
		return this.Plaintext
	}
	if this.Symmetric != nil {
		return this.Symmetric
	}
	if this.OpenPGP != nil {
		return this.OpenPGP
	}
	return nil
}

func (this *Spec) SetValue(value interface{}) bool {
	switch vt := value.(type) {
	case *PlaintextSpec:
		this.Plaintext = vt
	case *SymmetricSpec:
		this.Symmetric = vt
	case *OpenPGPSpec:
		this.OpenPGP = vt
	default:
		return false
	}
	return true
}

func init() { proto.RegisterFile("grant.proto", fileDescriptor_grant_28f4a44d458e3c64) }

var fileDescriptor_grant_28f4a44d458e3c64 = []byte{
	// 304 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x6c, 0x51, 0xcf, 0x4a, 0xc3, 0x30,
	0x18, 0x27, 0xba, 0x39, 0xf7, 0xd5, 0x21, 0x04, 0x0f, 0x65, 0x0c, 0x37, 0x72, 0x2a, 0x4c, 0x5b,
	0xa8, 0x37, 0x8f, 0xa2, 0x0c, 0xf1, 0x60, 0xe9, 0xc0, 0x83, 0xb7, 0x36, 0xcb, 0xba, 0xc2, 0x9a,
	0x94, 0x98, 0xc2, 0xfa, 0x36, 0xc3, 0xa7, 0xf1, 0x3d, 0x7c, 0x11, 0xe9, 0xd7, 0xae, 0xdd, 0xc0,
	0x5b, 0x7e, 0xff, 0xf2, 0xfb, 0xc1, 0x07, 0x56, 0xa2, 0x23, 0x69, 0xdc, 0x5c, 0x2b, 0xa3, 0x68,
	0x1f, 0xc1, 0xf8, 0x3e, 0x49, 0xcd, 0xa6, 0x88, 0x5d, 0xae, 0x32, 0x2f, 0x51, 0x89, 0xf2, 0x50,
	0x8d, 0x8b, 0x35, 0x22, 0x04, 0xf8, 0xaa, 0x53, 0x4c, 0x43, 0x7f, 0x51, 0xe5, 0xe8, 0x14, 0x7a,
	0xcb, 0x5c, 0x70, 0x9b, 0xcc, 0x88, 0x63, 0xf9, 0x96, 0x5b, 0x7f, 0x5d, 0x51, 0x21, 0x0a, 0xd4,
	0x05, 0xfa, 0x22, 0xb9, 0x2e, 0x73, 0x23, 0x56, 0xa1, 0x58, 0x0b, 0x2d, 0x24, 0x17, 0xf6, 0xd9,
	0x8c, 0x38, 0x57, 0xe1, 0x3f, 0x0a, 0xb5, 0x61, 0xf0, 0x21, 0xf4, 0x57, 0xaa, 0xa4, 0x7d, 0x3e,
	0x23, 0x4e, 0x3f, 0x3c, 0x40, 0xf6, 0x4d, 0xea, 0x2e, 0xea, 0xc3, 0x30, 0xd8, 0x46, 0xa9, 0x34,
	0x62, 0x67, 0x9a, 0xe2, 0x9b, 0xa6, 0xb8, 0xe5, 0x71, 0x41, 0x67, 0xab, 0x32, 0xcb, 0x32, 0xcb,
	0x84, 0xd1, 0x29, 0xc7, 0xf6, 0x2e, 0xd3, 0xf2, 0x75, 0xa6, 0x85, 0xf4, 0x0e, 0x06, 0xef, 0xb9,
	0x90, 0xc1, 0x22, 0xc0, 0x29, 0x96, 0x4f, 0x9b, 0x44, 0xc3, 0xa2, 0xff, 0x60, 0x79, 0xec, 0xfd,
	0xec, 0xa7, 0x84, 0x5d, 0xc3, 0xe8, 0x64, 0x03, 0x9b, 0xc3, 0xe8, 0xa4, 0x80, 0x8e, 0xe1, 0x32,
	0x28, 0xe2, 0x6d, 0xca, 0x5f, 0x9f, 0x71, 0xfc, 0x30, 0x6c, 0x31, 0x9b, 0x83, 0x75, 0xf4, 0x37,
	0x9d, 0xc0, 0xb0, 0x96, 0xde, 0x44, 0xd9, 0x78, 0x3b, 0xe2, 0x89, 0xed, 0x7f, 0x6f, 0xc9, 0xe7,
	0xe4, 0xe8, 0x70, 0x99, 0x92, 0xd1, 0xce, 0xdb, 0xa8, 0x48, 0xaf, 0x3c, 0x5c, 0x1a, 0x5f, 0xe0,
	0xb9, 0x1e, 0xfe, 0x02, 0x00, 0x00, 0xff, 0xff, 0x49, 0xa8, 0x7c, 0x3c, 0xf3, 0x01, 0x00, 0x00,
}
