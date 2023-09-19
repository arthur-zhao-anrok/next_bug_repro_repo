import localFont from 'next/font/local';

const aktivGrotesk = localFont({
    src: [
        {
            path: '../public/AktivGroteskCorp-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
    ],
});

console.log('hello world!');