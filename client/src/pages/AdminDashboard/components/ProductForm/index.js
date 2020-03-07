import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { pathOr } from 'ramda';

import PureForm from './PureForm';

const validationSchema = Yup.object().shape({
  product_name: Yup.string()
    .min(3, 'Le nom des bières doit contenir entre 3 et 40 caractères')
    .max(40, 'Le nom des bières doit contenir entre 3 et 40 caractères')
    .required('Champ obligatoire'),
  product_type: Yup.string()
    .min(3, 'Le type de bière doit contenir entre 3 et 40 caractères')
    .max(40, 'Le type de bière doit contenir entre 3 et 40 caractères')
    .required('Champ obligatoire'),
  product_price: Yup.number()
    .typeError('Tu dois écrire un chiffre, avec un point et pas une virgule!')
    .required('Champ obligatoire'),
  product_proof: Yup.number()
    .typeError('Tu dois écrire un chiffre, avec un point et pas une virgule!')
    .required('Champ obligatoire'),
  product_descr: Yup.string()
    .min(3, 'Le type de bière doit contenir entre 3 et 500 caractères')
    .max(500, 'Le type de bière doit contenir entre 3 et 500 caractères')
    .required('Champ obligatoire'),
  product_img: Yup.string().required('La photo de la bière est obligatoire!'),
  product_bg: Yup.string().required("La photo d'arrière plan est obligatoire!"),
  title_color: Yup.string()
    .matches('^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$', 'Format incorrect')
    .required('Champ obligatoire'),
  text_color: Yup.string()
    .matches('^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$', 'Format incorrect')
    .required('Champ obligatoire'),
  partner: Yup.string()
    .min(3, 'Le type de bière doit contenir entre 3 et 100 caractères')
    .max(100, 'Le type de bière doit contenir entre 3 et 100 caractères'),
  product_stock: Yup.number()
    .typeError("Tu dois écrire un chiffre, et rien d'autre !")
    .required('Champ obligatoire')
});

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
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {formikBag => <PureForm product={product} {...formikBag}></PureForm>}
      </Formik>
    </div>
  );
};

export default ProductForm;
