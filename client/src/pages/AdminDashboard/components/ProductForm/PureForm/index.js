import React from 'react';

import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { withStyles } from '@material-ui/core/styles';

import InputImage from '../../InputImage';
import ChangeColors from './../../ChangeColors';
import SliderContent from '../../../../../components/Slider/components/SliderContent';

export default function PureForm({
  product,
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  setFieldValue
  /* and other goodies */
}) {
  return (
    <form onSubmit={handleSubmit}>
      <div className='flex flex-col'>
        <div className='flex justify-between flex-col-md'>
          <StyledTextField
            id='product_name'
            name='product_name'
            label='Nom'
            variant='outlined'
            margin='normal'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.product_name}
            error={errors.product_name && touched.product_name}
            helperText={
              errors.product_name && touched.product_name && errors.product_name
            }
          />

          <StyledTextField
            id='product_type'
            name='product_type'
            label='Type'
            variant='outlined'
            margin='normal'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.product_type}
            error={errors.product_type && touched.product_type}
            helperText={
              errors.product_type && touched.product_type && errors.product_type
            }
          />
        </div>

        <div className='flex justify-between flex-col-md'>
          <StyledTextField
            id='product_price'
            name='product_price'
            label='Prix (€)'
            variant='outlined'
            margin='normal'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.product_price}
            error={errors.product_price && touched.product_price}
            helperText={
              errors.product_price &&
              touched.product_price &&
              errors.product_price
            }
          />
          <StyledTextField
            id='product_proof'
            name='product_proof'
            label='Degré'
            variant='outlined'
            margin='normal'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.product_proof}
            error={errors.product_proof && touched.product_proof}
            helperText={
              errors.product_proof &&
              touched.product_proof &&
              errors.product_proof
            }
          />
        </div>

        <div className='flex justify-between flex-col-md'>
          <StyledTextField
            id='product_descr'
            name='product_descr'
            label='Description'
            variant='outlined'
            margin='normal'
            multiline
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.product_descr}
            error={errors.product_descr && touched.product_descr}
            helperText={
              errors.product_descr &&
              touched.product_descr &&
              errors.product_descr
            }
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
            label='Partenaire de featuring'
            variant='outlined'
            margin='normal'
            disabled={!values.featuring}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.partner}
            error={errors.partner && touched.partner}
            helperText={errors.partner && touched.partner && errors.partner}
          />
        </div>
        <div className='flex justify-between flex-col-md'>
          <StyledTextField
            id='product_stock'
            name='product_stock'
            label='Stock'
            variant='outlined'
            margin='normal'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.product_stock}
            error={errors.product_stock && touched.product_stock}
            helperText={
              errors.product_stock &&
              touched.product_stock &&
              errors.product_stock
            }
          />
        </div>

        <div className='mt-6'>
          <StyledTypography variant='h6'>Modifier les images</StyledTypography>
          <div className='flex justify-between flex-col-md'>
            <StyledPaper>
              <InputImage
                id='product_img'
                name='product_img'
                onChange={file => setFieldValue('product_img', file[0].path)}
                value={values.product_img}
                wording='une nouvelle image'
              />
            </StyledPaper>
            <StyledPaper>
              <InputImage
                id='product_bg'
                name='product_bg'
                onChange={file => setFieldValue('product_bg', file[0].path)}
                value={values.product_bg}
                wording='un nouveau background'
              />
            </StyledPaper>
          </div>
        </div>

        <div className='mt-6 mx-2'>
          <Typography variant='h6'>Modifier les couleurs</Typography>
          <div className='flex justify-between flex-col-md min-height-150-px'>
            <ChangeColors
              id='title_color'
              name='title_color'
              wording='title'
              value={values.title_color}
              onChange={handleChange}
              handleBlur={handleBlur}
              error={errors.title_color}
              touched={touched.title_color}
            ></ChangeColors>

            <ChangeColors
              id='text_color'
              name='text_color'
              wording='text'
              handleBlur={handleBlur}
              value={values.text_color}
              onChange={handleChange}
              handleBlur={handleBlur}
              error={errors.text_color}
              touched={touched.text_color}
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
  );
}

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
