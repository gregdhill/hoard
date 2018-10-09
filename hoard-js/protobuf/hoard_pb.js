/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.core.Address', null, global);
goog.exportSymbol('proto.core.Ciphertext', null, global);
goog.exportSymbol('proto.core.Plaintext', null, global);
goog.exportSymbol('proto.core.Reference', null, global);
goog.exportSymbol('proto.core.ReferenceAndCiphertext', null, global);
goog.exportSymbol('proto.core.StatInfo', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.core.Reference = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.core.Reference, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.core.Reference.displayName = 'proto.core.Reference';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.core.Reference.prototype.toObject = function(opt_includeInstance) {
  return proto.core.Reference.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.core.Reference} msg The msg instance to transform.
 * @return {!Object}
 */
proto.core.Reference.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: msg.getAddress_asB64(),
    secretkey: msg.getSecretkey_asB64(),
    salt: msg.getSalt_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.core.Reference}
 */
proto.core.Reference.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.core.Reference;
  return proto.core.Reference.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.core.Reference} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.core.Reference}
 */
proto.core.Reference.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAddress(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSecretkey(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSalt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.core.Reference.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.core.Reference.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.core.Reference} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.core.Reference.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getSecretkey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getSalt_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
};


/**
 * optional bytes address = 1;
 * @return {!(string|Uint8Array)}
 */
proto.core.Reference.prototype.getAddress = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes address = 1;
 * This is a type-conversion wrapper around `getAddress()`
 * @return {string}
 */
proto.core.Reference.prototype.getAddress_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAddress()));
};


/**
 * optional bytes address = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAddress()`
 * @return {!Uint8Array}
 */
proto.core.Reference.prototype.getAddress_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAddress()));
};


/** @param {!(string|Uint8Array)} value */
proto.core.Reference.prototype.setAddress = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional bytes secretKey = 2;
 * @return {!(string|Uint8Array)}
 */
proto.core.Reference.prototype.getSecretkey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes secretKey = 2;
 * This is a type-conversion wrapper around `getSecretkey()`
 * @return {string}
 */
proto.core.Reference.prototype.getSecretkey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSecretkey()));
};


/**
 * optional bytes secretKey = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSecretkey()`
 * @return {!Uint8Array}
 */
proto.core.Reference.prototype.getSecretkey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSecretkey()));
};


/** @param {!(string|Uint8Array)} value */
proto.core.Reference.prototype.setSecretkey = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional bytes salt = 3;
 * @return {!(string|Uint8Array)}
 */
proto.core.Reference.prototype.getSalt = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes salt = 3;
 * This is a type-conversion wrapper around `getSalt()`
 * @return {string}
 */
proto.core.Reference.prototype.getSalt_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSalt()));
};


/**
 * optional bytes salt = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSalt()`
 * @return {!Uint8Array}
 */
proto.core.Reference.prototype.getSalt_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSalt()));
};


/** @param {!(string|Uint8Array)} value */
proto.core.Reference.prototype.setSalt = function(value) {
  jspb.Message.setField(this, 3, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.core.Plaintext = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.core.Plaintext, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.core.Plaintext.displayName = 'proto.core.Plaintext';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.core.Plaintext.prototype.toObject = function(opt_includeInstance) {
  return proto.core.Plaintext.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.core.Plaintext} msg The msg instance to transform.
 * @return {!Object}
 */
proto.core.Plaintext.toObject = function(includeInstance, msg) {
  var f, obj = {
    data: msg.getData_asB64(),
    salt: msg.getSalt_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.core.Plaintext}
 */
proto.core.Plaintext.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.core.Plaintext;
  return proto.core.Plaintext.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.core.Plaintext} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.core.Plaintext}
 */
proto.core.Plaintext.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setData(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSalt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.core.Plaintext.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.core.Plaintext.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.core.Plaintext} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.core.Plaintext.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getSalt_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional bytes data = 1;
 * @return {!(string|Uint8Array)}
 */
proto.core.Plaintext.prototype.getData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes data = 1;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.core.Plaintext.prototype.getData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getData()));
};


/**
 * optional bytes data = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.core.Plaintext.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/** @param {!(string|Uint8Array)} value */
proto.core.Plaintext.prototype.setData = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional bytes salt = 2;
 * @return {!(string|Uint8Array)}
 */
proto.core.Plaintext.prototype.getSalt = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes salt = 2;
 * This is a type-conversion wrapper around `getSalt()`
 * @return {string}
 */
proto.core.Plaintext.prototype.getSalt_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSalt()));
};


/**
 * optional bytes salt = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSalt()`
 * @return {!Uint8Array}
 */
proto.core.Plaintext.prototype.getSalt_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSalt()));
};


/** @param {!(string|Uint8Array)} value */
proto.core.Plaintext.prototype.setSalt = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.core.Ciphertext = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.core.Ciphertext, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.core.Ciphertext.displayName = 'proto.core.Ciphertext';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.core.Ciphertext.prototype.toObject = function(opt_includeInstance) {
  return proto.core.Ciphertext.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.core.Ciphertext} msg The msg instance to transform.
 * @return {!Object}
 */
proto.core.Ciphertext.toObject = function(includeInstance, msg) {
  var f, obj = {
    encrypteddata: msg.getEncrypteddata_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.core.Ciphertext}
 */
proto.core.Ciphertext.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.core.Ciphertext;
  return proto.core.Ciphertext.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.core.Ciphertext} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.core.Ciphertext}
 */
proto.core.Ciphertext.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setEncrypteddata(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.core.Ciphertext.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.core.Ciphertext.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.core.Ciphertext} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.core.Ciphertext.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEncrypteddata_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes encryptedData = 1;
 * @return {!(string|Uint8Array)}
 */
proto.core.Ciphertext.prototype.getEncrypteddata = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes encryptedData = 1;
 * This is a type-conversion wrapper around `getEncrypteddata()`
 * @return {string}
 */
proto.core.Ciphertext.prototype.getEncrypteddata_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getEncrypteddata()));
};


/**
 * optional bytes encryptedData = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getEncrypteddata()`
 * @return {!Uint8Array}
 */
proto.core.Ciphertext.prototype.getEncrypteddata_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getEncrypteddata()));
};


/** @param {!(string|Uint8Array)} value */
proto.core.Ciphertext.prototype.setEncrypteddata = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.core.ReferenceAndCiphertext = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.core.ReferenceAndCiphertext, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.core.ReferenceAndCiphertext.displayName = 'proto.core.ReferenceAndCiphertext';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.core.ReferenceAndCiphertext.prototype.toObject = function(opt_includeInstance) {
  return proto.core.ReferenceAndCiphertext.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.core.ReferenceAndCiphertext} msg The msg instance to transform.
 * @return {!Object}
 */
proto.core.ReferenceAndCiphertext.toObject = function(includeInstance, msg) {
  var f, obj = {
    reference: (f = msg.getReference()) && proto.core.Reference.toObject(includeInstance, f),
    ciphertext: (f = msg.getCiphertext()) && proto.core.Ciphertext.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.core.ReferenceAndCiphertext}
 */
proto.core.ReferenceAndCiphertext.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.core.ReferenceAndCiphertext;
  return proto.core.ReferenceAndCiphertext.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.core.ReferenceAndCiphertext} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.core.ReferenceAndCiphertext}
 */
proto.core.ReferenceAndCiphertext.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.core.Reference;
      reader.readMessage(value,proto.core.Reference.deserializeBinaryFromReader);
      msg.setReference(value);
      break;
    case 2:
      var value = new proto.core.Ciphertext;
      reader.readMessage(value,proto.core.Ciphertext.deserializeBinaryFromReader);
      msg.setCiphertext(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.core.ReferenceAndCiphertext.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.core.ReferenceAndCiphertext.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.core.ReferenceAndCiphertext} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.core.ReferenceAndCiphertext.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReference();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.core.Reference.serializeBinaryToWriter
    );
  }
  f = message.getCiphertext();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.core.Ciphertext.serializeBinaryToWriter
    );
  }
};


/**
 * optional Reference reference = 1;
 * @return {?proto.core.Reference}
 */
proto.core.ReferenceAndCiphertext.prototype.getReference = function() {
  return /** @type{?proto.core.Reference} */ (
    jspb.Message.getWrapperField(this, proto.core.Reference, 1));
};


/** @param {?proto.core.Reference|undefined} value */
proto.core.ReferenceAndCiphertext.prototype.setReference = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.core.ReferenceAndCiphertext.prototype.clearReference = function() {
  this.setReference(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.core.ReferenceAndCiphertext.prototype.hasReference = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Ciphertext ciphertext = 2;
 * @return {?proto.core.Ciphertext}
 */
proto.core.ReferenceAndCiphertext.prototype.getCiphertext = function() {
  return /** @type{?proto.core.Ciphertext} */ (
    jspb.Message.getWrapperField(this, proto.core.Ciphertext, 2));
};


/** @param {?proto.core.Ciphertext|undefined} value */
proto.core.ReferenceAndCiphertext.prototype.setCiphertext = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.core.ReferenceAndCiphertext.prototype.clearCiphertext = function() {
  this.setCiphertext(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.core.ReferenceAndCiphertext.prototype.hasCiphertext = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.core.Address = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.core.Address, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.core.Address.displayName = 'proto.core.Address';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.core.Address.prototype.toObject = function(opt_includeInstance) {
  return proto.core.Address.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.core.Address} msg The msg instance to transform.
 * @return {!Object}
 */
proto.core.Address.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: msg.getAddress_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.core.Address}
 */
proto.core.Address.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.core.Address;
  return proto.core.Address.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.core.Address} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.core.Address}
 */
proto.core.Address.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.core.Address.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.core.Address.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.core.Address} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.core.Address.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes address = 1;
 * @return {!(string|Uint8Array)}
 */
proto.core.Address.prototype.getAddress = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes address = 1;
 * This is a type-conversion wrapper around `getAddress()`
 * @return {string}
 */
proto.core.Address.prototype.getAddress_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAddress()));
};


/**
 * optional bytes address = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAddress()`
 * @return {!Uint8Array}
 */
proto.core.Address.prototype.getAddress_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAddress()));
};


/** @param {!(string|Uint8Array)} value */
proto.core.Address.prototype.setAddress = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.core.StatInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.core.StatInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.core.StatInfo.displayName = 'proto.core.StatInfo';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.core.StatInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.core.StatInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.core.StatInfo} msg The msg instance to transform.
 * @return {!Object}
 */
proto.core.StatInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: msg.getAddress_asB64(),
    exists: jspb.Message.getFieldWithDefault(msg, 2, false),
    size: jspb.Message.getFieldWithDefault(msg, 3, 0),
    location: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.core.StatInfo}
 */
proto.core.StatInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.core.StatInfo;
  return proto.core.StatInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.core.StatInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.core.StatInfo}
 */
proto.core.StatInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAddress(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setExists(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSize(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocation(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.core.StatInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.core.StatInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.core.StatInfo} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.core.StatInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getExists();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getSize();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getLocation();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional bytes address = 1;
 * @return {!(string|Uint8Array)}
 */
proto.core.StatInfo.prototype.getAddress = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes address = 1;
 * This is a type-conversion wrapper around `getAddress()`
 * @return {string}
 */
proto.core.StatInfo.prototype.getAddress_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAddress()));
};


/**
 * optional bytes address = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAddress()`
 * @return {!Uint8Array}
 */
proto.core.StatInfo.prototype.getAddress_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAddress()));
};


/** @param {!(string|Uint8Array)} value */
proto.core.StatInfo.prototype.setAddress = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional bool exists = 2;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.core.StatInfo.prototype.getExists = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 2, false));
};


/** @param {boolean} value */
proto.core.StatInfo.prototype.setExists = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional uint64 size = 3;
 * @return {number}
 */
proto.core.StatInfo.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.core.StatInfo.prototype.setSize = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional string location = 4;
 * @return {string}
 */
proto.core.StatInfo.prototype.getLocation = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.core.StatInfo.prototype.setLocation = function(value) {
  jspb.Message.setField(this, 4, value);
};


goog.object.extend(exports, proto.core);
