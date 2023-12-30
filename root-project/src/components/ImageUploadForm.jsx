import { useState } from 'react';

const ImageUploadForm = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [description, setDescription] = useState("null");

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = async () => {
        if (!selectedFile) {
            console.error('No file selected');
            return;
        }

        const formData = new FormData();
        formData.append('image', selectedFile);
        formData.append('description', description);

        try {
            const response = await fetch('http://localhost:5001/api/v1/images', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                console.log('Image uploaded successfully!');
                // Handle success, e.g., show a success message
            } else {
                console.error('Image upload failed');
                // Handle failure, e.g., show an error message
            }
        } catch (error) {
            console.error('Error uploading image:', error);
            // Handle any network or other errors
        }
    };

    return (
        <div className="max-w-md my-20 mx-auto p-6 bg-white rounded-lg shadow-md flex flex-col ">
            <h1 className="text-2xl font-semibold mb-4">Upload Image</h1>
            <input
                type="file"
                onChange={handleFileChange}
                className="border rounded p-2 mb-4"
            />
            <input
                type="text"
                onChange={(e) => { setDescription(e.target.value) }}
                placeholder='Description'
                className="border rounded p-2 mb-4"
            />
            <button
                onClick={handleUpload}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Upload
            </button>
        </div>
    );
};

export default ImageUploadForm;
