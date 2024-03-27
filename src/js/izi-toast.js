// ======================================= INCLUDING IZITOAST
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// ====================================== FUNCTIONS

export function warningMessage(message) {
    iziToast.warning({
        message,
        position: 'topRight',
      });
}

export function errorMessage(message) {
    iziToast.error({
        message,
        position: 'topRight',
        messageColor: '#fafafb',
        messageSize: '16px',
        maxWidth: '432px',
        backgroundColor: 'rgb(239, 64, 64)',
        position: 'topRight',
        progressBarColor: 'rgb(181, 27, 27)',
        // icon: 'icon-error-sign',
      });
}