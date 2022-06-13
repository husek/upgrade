import * as Yup from 'yup';

const MoreInfoSchema = Yup.object().shape({
  color: Yup.string()
    .required('Required'),
  terms: Yup.boolean()
    .required("The terms and conditions must be accepted.")
    .oneOf([true], "The terms and conditions must be accepted.")
});

export default MoreInfoSchema;
