import React from 'react';
import { Formik } from 'formik';

import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import InputImage from './../../InputImage';
import ChangeColors from './../../ChangeColors';
import SliderContent from './../../../../../components/Slider/components/SliderContent';

import { withStyles } from '@material-ui/core/styles';

const EditForm = ({ product, handleSubmit }) => {
  const {
    product_name,
    product_type,
    product_price,
    product_proof,
    product_descr,
    product_img,
    product_bg,
    title_color,
    text_color,
    featuring,
    partner,
    product_stock
  } = product;

  return (
    <div>
      <Formik
        initialValues={{
          name: product_name,
          type: product_type,
          price: product_price,
          proof: product_proof,
          description: product_descr,
          image: product_img,
          background: product_bg,
          titleColor: title_color,
          textColor: text_color,
          featuring: featuring,
          partner: partner,
          stock: product_stock
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
                  id='name'
                  name='name'
                  type='name'
                  label='Nom'
                  variant='outlined'
                  margin='normal'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
                {/* {errors.email && touched.email && errors.email} */}
                <StyledTextField
                  id='type'
                  name='type'
                  type='type'
                  label='Type'
                  variant='outlined'
                  margin='normal'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.type}
                />
                {/* {errors.password && touched.password && errors.password} */}
              </div>

              <div className='flex justify-between flex-col-md'>
                <StyledTextField
                  id='price'
                  name='price'
                  type='price'
                  label='Prix (€)'
                  variant='outlined'
                  margin='normal'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.price}
                />
                <StyledTextField
                  id='proof'
                  name='proof'
                  type='proof'
                  label='Degré'
                  variant='outlined'
                  margin='normal'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.proof}
                />
              </div>

              <div className='flex justify-between flex-col-md'>
                <StyledTextField
                  id='description'
                  name='description'
                  type='description'
                  variant='outlined'
                  margin='normal'
                  multiline
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.description}
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
                  id='stock'
                  name='stock'
                  type='stock'
                  label='Stock'
                  variant='outlined'
                  margin='normal'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.stock}
                />
              </div>

              <div className='mt-6'>
                <StyledTypography variant='h6'>
                  Modifier les images
                </StyledTypography>
                <div className='flex justify-between flex-col-md'>
                  <StyledPaper>
                    <InputImage
                      id='image'
                      name='image'
                      type='image'
                      onChange={file => setFieldValue('image', file[0].path)}
                      value={values.image}
                      wording='une nouvelle image'
                    />
                  </StyledPaper>
                  <StyledPaper>
                    <InputImage
                      id='background'
                      name='background'
                      type='background'
                      onChange={file =>
                        setFieldValue('background', file[0].path)
                      }
                      value={values.background}
                      wording='un nouveau background'
                    />
                  </StyledPaper>
                </div>
              </div>

              <div className='mt-6 mx-2'>
                <Typography variant='h6'>Modifier les couleurs</Typography>
                <div className='flex justify-between flex-col-md'>
                  <ChangeColors
                    id='titleColor'
                    name='titleColor'
                    type='titleColor'
                    wording='title'
                    value={values.titleColor}
                    onChange={handleChange}
                  ></ChangeColors>

                  <ChangeColors
                    id='textColor'
                    name='textColor'
                    type='textColor'
                    wording='text'
                    value={values.textColor}
                    onChange={handleChange}
                  ></ChangeColors>
                </div>
              </div>
              <div className=' my-6 mx-2'>
                <Typography variant='h6'>Aperçu :</Typography>
                <div
                  className='h-full'
                  style={{
                    backgroundImage: `url(/static/images/${product_bg})`,
                    backgroundSize: 'cover'
                  }}
                >
                  {' '}
                  <SliderContent product={product}></SliderContent>
                </div>{' '}
              </div>
              <StyledButton type='submit' variant='contained' color='secondary'>
                Modifier
              </StyledButton>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default EditForm;

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
