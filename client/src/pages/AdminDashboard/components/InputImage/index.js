import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

import Button from '@material-ui/core/Button';

function InputImage({ onChange, value }) {
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
    console.log('acceptedFiles -->', acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, open } = useDropzone({
    multiple: false,
    noDrag: true,
    onDrop: onChange
  });

  // console.log('value', value);
  return (
    <div {...getRootProps()} className='flex flex-col align-center py-5'>
      <input {...getInputProps()} />
      <img
        src={`/static/images/${value}`}
        alt='Image'
        className='max-height-30vh mb-5'
      />

      <Button onClick={open}> Modifier l'image</Button>
    </div>
  );
}

export default InputImage;
