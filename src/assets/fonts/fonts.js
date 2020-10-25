import { createGlobalStyle } from 'styled-components'

import RobotoBold from './Montserrat-Bold.ttf'
import RobotoMedium from './Montserrat-Medium.ttf'
import RobotoRegular from './Montserrat-Regular.ttf'
import MonserratBold from './Montserrat-Bold.ttf'
import MonserratMedium from './Montserrat-Medium.ttf'
import MonserratRegular from './Montserrat-Regular.ttf'

export default createGlobalStyle`
    @font-face{
        font-family: 'Roboto-Bold';
        src: local('Roboto-Bold'), local('Roboto-Bold'),
        url(${RobotoBold}) format('truetype');
    }

    @font-face{
        font-family: 'Roboto-Medium';
        src: local('Roboto-Medium'), local('Roboto-Medium'),
        url(${RobotoMedium}) format('truetype');
    }

    @font-face{
        font-family: 'Roboto-Regular';
        src: local('Roboto-Regular'), local('Roboto-Regular'),
        url(${RobotoRegular}) format('truetype');
    }

    @font-face{
        font-family: 'Monserrat-Bold';
        src: local('Montserrat-Bold'), local('Montserrat-Bold'),
        url(${MonserratBold}) format('truetype');
    }

    @font-face{
        font-family: 'Monserrat-Medium';
        src: local('Montserrat-Medium'), local('Montserrat-Medium'),
        url(${MonserratMedium}) format('truetype');
    }

    @font-face{
        font-family: 'Monserrat-Regular';
        src: local('Montserrat-Regular'), local('Montserrat-Regular'),
        url(${MonserratRegular}) format('truetype');
    }
`