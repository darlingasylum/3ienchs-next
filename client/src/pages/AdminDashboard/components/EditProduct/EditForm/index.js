import React from 'react';
import { useFormik } from 'formik';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const EditForm = ({ product, handleSubmit }) => {
  const {
    product_name,
    product_type,
    product_id,
    product_bg,
    product_price,
    product_proof,
    product_img,
    bg_color,
    title_color,
    text_color,
    product_stock,
    featuring
  } = product;

  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      name: product_name,
      type: product_type,
      price: product_price + '€',
      proof: product_proof,
      background: product_bg,
      image: product_img,
      titleColor: title_color,
      textColor: text_color,
      stock: product_stock,
      featuring: featuring
    },
    onSubmit: handleSubmit
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className='flex flex-col'>
        <div className='flex justify-between flex-col-md'>
          <StyledTextField
            id='name'
            name='name'
            type='name'
            label='Nom'
            variant='outlined'
            margin='normal'
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          <StyledTextField
            id='type'
            name='type'
            type='type'
            label='Type'
            variant='outlined'
            margin='normal'
            onChange={formik.handleChange}
            value={formik.values.type}
          />
        </div>
        <div className='flex justify-between flex-col-md'>
          <StyledTextField
            id='proof'
            name='proof'
            type='proof'
            label='Degré'
            variant='outlined'
            margin='normal'
            onChange={formik.handleChange}
            value={formik.values.proof}
          />
          <StyledTextField
            id='price'
            name='price'
            type='price'
            label='Prix'
            variant='outlined'
            margin='normal'
            onChange={formik.handleChange}
            value={formik.values.price}
          />
        </div>

        <div className='flex justify-between flex-col-md'>
          <StyledTextField
            id='featuring'
            name='featuring'
            type='featuring'
            label='Featuring ?'
            variant='outlined'
            margin='normal'
            onChange={formik.handleChange}
            value={formik.values.featuring}
          />
          <StyledTextField
            id='stock'
            name='stock'
            type='stock'
            label='Stock'
            variant='outlined'
            margin='normal'
            onChange={formik.handleChange}
            value={formik.values.stock}
          />
        </div>

        <Button type='submit' variant='contained' color='secondary'>
          Modifier
        </Button>
      </div>
    </form>
  );
};

export default EditForm;

const StyledTextField = withStyles({
  root: {
    flex: 1,
    margin: '0.5rem'
  }
})(TextField);
