import React from 'react';
import { Formik } from 'formik';
import { pathOr } from 'ramda';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import InputImage from '../InputImage';
import ChangeColors from '../ChangeColors';
import SliderContent from '../../../../components/Slider/components/SliderContent';

import { withStyles } from '@material-ui/core/styles';

const ProductForm = ({ product, handleSubmit }) => {
  return (
    <div>
      <Formik
        initialValues={{
          product_name: pathOr('', ['product_name'], product),
          product_type: pathOr('', ['product_type'], product),
          product_price: pathOr('3', ['product_price'], product),
          product_proof: pathOr('', ['product_proof'], product),
          product_descr: pathOr('', ['product_descr'], product),
          product_img: pathOr('', ['product_img'], product),
          product_bg: pathOr('', ['product_bg'], product),
          title_color: pathOr('', ['title_color'], product),
          text_color: pathOr('', ['text_color'], product),
          featuring: pathOr(false, ['featuring'], product),
          partner: pathOr('', ['partner'], product),
          product_stock: pathOr(0, ['product_stock'], product)
        }}
        // validate={values => {
        //   const errors = {};
        //   if (!values.email) {
        //     errors.email = 'Required';
        //   } else if (
        //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        //   ) {
        //     errors.email = 'Invalid email address';
        //   }
        //   return errors;
        // }}
        onSubmit={handleSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
          isSubmitting
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <div className='flex flex-col'>
              <div className='flex justify-between flex-col-md'>
                <StyledTextField
                  id='product_name'
                  name='product_name'
                  type='name'
                  label='Nom'
                  variant='outlined'
                  margin='normal'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.product_name}
                />
                {/* {errors.email && touched.email && errors.email} */}
                <StyledTextField
                  id='product_type'
                  name='product_type'
                  type='type'
                  label='Type'
                  variant='outlined'
                  margin='normal'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.product_type}
                />
                {/* {errors.password && touched.password && errors.password} */}
              </div>

              <div className='flex justify-between flex-col-md'>
                <StyledTextField
                  id='product_price'
                  name='product_price'
                  type='price'
                  label='Prix (€)'
                  variant='outlined'
                  margin='normal'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.product_price}
                />
                <StyledTextField
                  id='product_proof'
                  name='product_proof'
                  type='proof'
                  label='Degré'
                  variant='outlined'
                  margin='normal'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.product_proof}
                />
              </div>

              <div className='flex justify-between flex-col-md'>
                <StyledTextField
                  id='product_descr'
                  name='product_descr'
                  type='description'
                  label='Description'
                  variant='outlined'
                  margin='normal'
                  multiline
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.product_descr}
                />
              </div>

              <div className='flex justify-between flex-col-md'>
                <FormControlLabel
                  control={
                    <StyledCheckbox
                      name='featuring'
                      checked={values.featuring}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  }
                  label='Featuring ?'
                />
                <StyledTextField
                  id='partner'
                  name='partner'
                  type='partner'
                  label='Partenaire de featuring'
                  variant='outlined'
                  margin='normal'
                  disabled={!values.featuring}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.partner}
                />
              </div>
              <div className='flex justify-between flex-col-md'>
                <StyledTextField
                  id='product_stock'
                  name='product_stock'
                  type='stock'
                  label='Stock'
                  variant='outlined'
                  margin='normal'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.product_stock}
                />
              </div>

              <div className='mt-6'>
                <StyledTypography variant='h6'>
                  Modifier les images
                </StyledTypography>
                <div className='flex justify-between flex-col-md'>
                  <StyledPaper>
                    <InputImage
                      id='product_img'
                      name='product_img'
                      type='image'
                      onChange={file =>
                        setFieldValue('product_img', file[0].path)
                      }
                      value={values.product_img}
                      wording='une nouvelle image'
                    />
                  </StyledPaper>
                  <StyledPaper>
                    <InputImage
                      id='product_bg'
                      name='product_bg'
                      type='background'
                      onChange={file =>
                        setFieldValue('product_bg', file[0].path)
                      }
                      value={values.product_bg}
                      wording='un nouveau background'
                    />
                  </StyledPaper>
                </div>
              </div>

              <div className='mt-6 mx-2'>
                <Typography variant='h6'>Modifier les couleurs</Typography>
                <div className='flex justify-between flex-col-md'>
                  <ChangeColors
                    id='title_color'
                    name='title_color'
                    type='title_color'
                    wording='title'
                    value={values.title_color}
                    onChange={handleChange}
                  ></ChangeColors>

                  <ChangeColors
                    id='text_color'
                    name='text_color'
                    type='text_color'
                    wording='text'
                    value={values.text_color}
                    onChange={handleChange}
                  ></ChangeColors>
                </div>
              </div>

              <div className=' my-6 mx-2'>
                <Typography variant='h6'>Aperçu :</Typography>
                <div
                  className='h-full'
                  style={{
                    backgroundImage: values.product_bg
                      ? `url(/static/images/${values.product_bg})`
                      : 'none',
                    backgroundColor: values.product_bg ? 'none' : '#dddbe6',
                    borderRadius: values.product_bg ? 'none' : '10px',
                    backgroundSize: 'cover'
                  }}
                >
                  <SliderContent product={values}></SliderContent>
                </div>
              </div>

              <StyledButton type='submit' variant='contained' color='secondary'>
                {product ? 'Modifier' : 'Créer'}
              </StyledButton>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default ProductForm;

const StyledTextField = withStyles({
  root: {
    flex: 1,
    margin: '0.5rem'
  }
})(TextField);

const StyledCheckbox = withStyles({
  root: {
    marginLeft: '0.5rem'
  }
})(Checkbox);

const StyledTypography = withStyles({
  root: {
    marginLeft: '0.5rem'
  }
})(Typography);

const StyledPaper = withStyles({
  root: {
    flex: 1,
    margin: '0.5rem'
  }
})(Paper);

const StyledButton = withStyles({
  root: {
    margin: '0.5rem'
  }
})(Button);
