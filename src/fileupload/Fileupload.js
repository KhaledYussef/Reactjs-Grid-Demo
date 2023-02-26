import React, { Component } from 'react'
import { BlobServiceClient } from '@azure/storage-blob'

export default class Fileupload extends Component {
	constructor(props) {
		super(props);
		this.state = {
			file: null
		};
		this.uploadFile = this.uploadFile.bind(this);
		this.onfileChanged = this.onfileChanged.bind(this);
	}


	// handle on file input changed
	onfileChanged(event) {
		console.log(event.target.files)
		this.setState({ file: event.target.files[0] })
	}

	// handle on upload button click
	async uploadFile() {
		// don't change it
		let storageAccName = "rahaldeliverystorage";

		// don't change it
		let sasToken = "?sv=2021-06-08&ss=b&srt=sco&sp=rwdlaciytfx&se=2025-02-26T20:39:10Z&st=2023-02-26T12:39:10Z&spr=https,http&sig=sRSgY170ZMgc%2BiHX3%2Bpl7viGIQg9FRJ9WxJWmmqS9vA%3D";

		// don't change it
		const blobService = new BlobServiceClient(
			`https://${storageAccName}.blob.core.windows.net/?${sasToken}`,
		);

		// don't change it
		const containerClient = blobService.getContainerClient('uploads');

		// You should change the [Products] and [ProductId] for example:
		// if we want to upload company logo for company with id 3, we should write:
		// "Companies/3/" + this.state.file.name;
		const fileLocation = "Products/ProductId/" + this.state.file.name;

		// don't change it
		const blobClient = containerClient.getBlockBlobClient(fileLocation);

		// don't change it
		const options = { blobHTTPHeaders: { blobContentType: this.state.file.type } };

		// don't change it
		var result = await blobClient.upload(this.state.file, this.state.file.size, options);

		// on success
		if (result.clientRequestId) {
			// here is the uploaded file URL
			// you should send this url to API
			var url = `https://rahaldeliverystorage.blob.core.windows.net/uploads/${fileLocation}`;
			console.log(url);
		}
	}

	render() {
		return (
			<div>
				<h1>Fileupload</h1>
				<input type="file" onChange={this.onfileChanged} />
				<button onClick={() => this.uploadFile()}>upload</button>
			</div>
		)
	}
}
