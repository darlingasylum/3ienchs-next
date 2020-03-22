import React from 'react';
import { useDropzone } from 'react-dropzone';

import Button from '@material-ui/core/Button';

function InputImage({ onChange, value, wording }) {
  const { getRootProps, getInputProps, open } = useDropzone({
    multiple: false,
    noDrag: true,
    onDrop: onChange
  });

  const action = value ? 'modifier' : 'télécharger';

  return (
    <div {...getRootProps()} className='flex flex-col align-center py-5'>
      <input {...getInputProps()} />
      <img
        src={`/static/images/${value}`}
        alt='Image'
        className='max-height-30vh mb-5'
      />

      <Button onClick={open}>
        {action} {wording}
      </Button>
    </div>
  );
}

export default InputImage;
