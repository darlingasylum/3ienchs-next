import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

import Button from '@material-ui/core/Button';

function InputImage({ onChange, value }) {
  const { getRootProps, getInputProps, open } = useDropzone({
    multiple: false,
    noDrag: true,
    onDrop: onChange
  });

  const CTAText = value ? "Modifier l'image" : 'Télécharger une image';

  return (
    <div {...getRootProps()} className='flex flex-col align-center py-5'>
      <input {...getInputProps()} />

      {value ? (
        <img
          src={`/static/images/${value}`}
          alt='Image'
          className='max-height-30vh mb-5'
        />
      ) : (
        <img
          src={`/static/images/no-image.jpg`}
          alt='no_image'
          className='max-height-30vh mb-5'
        />
      )}

      <Button onClick={open}> {CTAText}</Button>
    </div>
  );
}

export default InputImage;
