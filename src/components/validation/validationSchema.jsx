import * as Yup from 'yup';
import YupPassword from 'yup-password';
import validator from 'validator';

YupPassword(Yup);

Yup.addMethod(
    Yup.string,
    'emailCheck',
    function (errorMessage) {
        return this.test(` `, errorMessage, function (value) {
            const { path, createError } = this;

            return (
                validator.isEmail(value) ||
                createError({ path, message: errorMessage })
            );
        });
    }
);
Yup.addMethod(
    Yup.string,
    'mobileCheck',
    function (errorMessage) {
        return this.test(``, errorMessage, function (value) {
            const { path, createError } = this;

            return (
                validator.isMobilePhone(value) ||
                createError({ path, message: errorMessage })
            );
        });
    }
);
const ValidationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string()
        .emailCheck('Invalid email')
        .required('Required'),
    phone: Yup.string()
        .mobileCheck('Invalid mobile number')
        .required('Required')
        .min(10, 'Mobile number is of length 10'),

});

export default ValidationSchema;
