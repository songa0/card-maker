class Cloudinary {
  upload(formData) {
    const url = "https://api.cloudinary.com/v1_1/dpu0cdc9t/image/upload";

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        return response.text();
      })
      .then((data) => {});
  }
}

export default Cloudinary;
