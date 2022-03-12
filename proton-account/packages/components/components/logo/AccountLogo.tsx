interface Props {
    className?: string;
}
const AccountLogo = ({ className = 'logo' }: Props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 174 22"
            className={className}
            aria-labelledby="logo__title"
        >
            <g>
                <path d="M8.355 8.416A2.423 2.423 0 0110 7.708a2.423 2.423 0 012.354 2.354A2.423 2.423 0 0110 12.415a2.423 2.423 0 01-2.354-2.353 2.423 2.423 0 01.709-1.646zM5.292 15.6c0-1.662 2.908-2.354 4.985-2.354 2.077 0 4.43.97 4.43 2.354a5.012 5.012 0 01-4.43 2.354A5.72 5.72 0 015.292 15.6z" />
                <path d="M5 4.517A9 9 0 0110 3a8.986 8.986 0 019 9A9 9 0 115 4.517zm7.65 1.087a6.923 6.923 0 10-5.3 12.792 6.923 6.923 0 005.3-12.792zM30.041 4.886H25.85V20.3h2.642v-5.44h1.571c1.779 0 3.239-.404 4.351-1.242 1.14-.859 1.69-2.163 1.69-3.852 0-1.591-.53-2.829-1.623-3.657-1.075-.828-2.568-1.223-4.44-1.223zm-1.549 7.762v-5.57h1.528c1.126 0 1.94.23 2.483.647l.003.002c.53.398.826 1.059.826 2.06 0 1.146-.304 1.853-.822 2.23l-.003.002c-.543.405-1.372.629-2.53.629h-1.485zM102.322 4.886h-3.018L94.36 20.3h2.698l1.118-3.72h5.166l1.118 3.72h2.783l-4.921-15.414zm.346 9.439h-3.817l1.917-6.392 1.9 6.392z" />
                <path d="M61.039 5.536V8.37h2.733l-.3 2.127h-2.433v6.451c0 .559.096.908.237 1.105.137.16.384.272.817.272.378 0 .83-.129 1.363-.416l.257-.138 1.035 1.804-.226.157c-.798.552-1.704.827-2.708.827-1.02 0-1.856-.29-2.47-.905l-.005-.005c-.6-.633-.878-1.52-.878-2.615v-6.537h-1.978V8.369h1.978V5.845l2.578-.309zM167.865 8.37V5.535l-2.578.309v2.524h-1.978v2.127h1.978v6.537c0 1.095.278 1.982.877 2.614l.006.006c.614.614 1.45.905 2.47.905 1.004 0 1.91-.275 2.707-.827l.227-.157-1.035-1.804-.257.138c-.533.287-.985.416-1.363.416-.434 0-.68-.113-.817-.272-.141-.197-.237-.546-.237-1.105v-6.451h2.433l.299-2.127h-2.732zM41.138 8.826a3.035 3.035 0 011.998-.715 4.9 4.9 0 011.19.138l.276.07-.478 2.525-.308-.077a3.776 3.776 0 00-.916-.12c-.618 0-1.098.221-1.468.665-.382.459-.703 1.197-.941 2.25V20.3h-2.578V8.37h2.274l.122 1.447c.236-.394.511-.726.83-.991z" />
                <path d="M50.333 8.111c-1.109 0-2.078.263-2.894.802-.813.521-1.43 1.264-1.852 2.214-.422.934-.628 2.01-.628 3.218 0 1.869.457 3.385 1.403 4.515.955 1.139 2.285 1.698 3.95 1.698 1.094 0 2.055-.256 2.87-.779l.004-.002c.81-.535 1.427-1.276 1.85-2.212v-.002c.422-.948.628-2.03.628-3.239 0-1.868-.456-3.384-1.402-4.513-.94-1.14-2.264-1.7-3.929-1.7zm-2.645 6.234c0-1.423.243-2.437.684-3.088.428-.63 1.065-.954 1.961-.954.881 0 1.507.32 1.928.947.435.648.675 1.658.675 3.074 0 1.423-.242 2.438-.68 3.09-.425.63-1.056.953-1.944.953-.89 0-1.52-.322-1.945-.948-.438-.648-.68-1.658-.68-3.074zM67.763 8.912c.816-.538 1.786-.8 2.894-.8 1.665 0 2.989.558 3.93 1.699l-.002-.001-.23.192.232-.19V9.81c.945 1.13 1.401 2.645 1.401 4.513 0 1.21-.206 2.291-.627 3.24l-.001.001c-.423.936-1.04 1.677-1.85 2.212l-.003.002c-.816.523-1.777.779-2.871.779-1.665 0-2.995-.559-3.95-1.698-.946-1.13-1.403-2.646-1.403-4.514 0-1.21.207-2.285.629-3.22.422-.95 1.039-1.692 1.851-2.214zm0 0l-.002.002.166.25-.162-.253-.002.001zm.933 2.345c-.441.65-.684 1.665-.684 3.088 0 1.416.241 2.426.68 3.074.423.626 1.055.948 1.944.948.888 0 1.52-.323 1.944-.953.439-.652.68-1.667.68-3.09 0-1.416-.24-2.426-.675-3.074-.42-.627-1.047-.947-1.928-.947-.896 0-1.533.323-1.96.954z" />
                <path d="M83.858 8.111c-.767 0-1.478.185-2.127.556l-.002.002a4.679 4.679 0 00-1.11.904l-.124-1.204h-2.269V20.3h2.578v-8.254c.374-.587.765-1.027 1.17-1.33a2.28 2.28 0 011.411-.457c.531 0 .884.148 1.111.397.224.245.374.715.374 1.496V20.3h2.578v-8.427c0-1.13-.31-2.057-.964-2.743-.642-.69-1.532-1.019-2.626-1.019zM110.261 8.915c.801-.54 1.743-.804 2.812-.804.702 0 1.352.105 1.947.318.598.2 1.167.528 1.706.978l.221.183-1.296 1.707-.237-.169a4.21 4.21 0 00-1.103-.583l-.013-.004a3.151 3.151 0 00-1.139-.196c-.822 0-1.446.32-1.904.969-.451.659-.699 1.669-.699 3.075 0 1.407.248 2.391.694 3.003.438.588 1.06.889 1.909.889.413 0 .786-.06 1.122-.175a6.462 6.462 0 001.186-.636l.243-.16 1.231 1.759-.218.176c-1.084.872-2.303 1.313-3.65 1.313-1.609 0-2.908-.545-3.861-1.652l-.002-.002c-.934-1.102-1.382-2.606-1.382-4.473 0-1.236.206-2.333.628-3.282.421-.948 1.021-1.696 1.803-2.232l.002-.002zM122.855 8.111c-1.069 0-2.01.265-2.812.804l-.002.002c-.782.536-1.381 1.284-1.803 2.232-.421.949-.628 2.046-.628 3.283 0 1.866.449 3.37 1.383 4.472l.002.002c.953 1.107 2.252 1.652 3.86 1.652 1.347 0 2.567-.44 3.65-1.313l.219-.176-1.231-1.759-.244.16a6.426 6.426 0 01-1.185.636 3.427 3.427 0 01-1.123.175c-.848 0-1.47-.3-1.908-.889-.446-.612-.694-1.596-.694-3.003 0-1.406.247-2.416.699-3.075.458-.649 1.081-.969 1.903-.969.428 0 .806.067 1.14.196l.013.004c.353.118.721.31 1.103.583l.237.17 1.295-1.708-.22-.183a5.296 5.296 0 00-1.706-.978 5.744 5.744 0 00-1.948-.318z" />
                <path d="M130.293 8.913c.816-.539 1.785-.802 2.894-.802 1.664 0 2.988.56 3.929 1.7l-.001-.001-.23.192.232-.19-.001-.001c.946 1.13 1.402 2.645 1.402 4.513 0 1.21-.206 2.291-.628 3.24l-.001.001c-.422.936-1.039 1.677-1.849 2.212l-.003.002c-.816.523-1.777.779-2.871.779-1.665 0-2.995-.559-3.95-1.698-.946-1.13-1.403-2.646-1.403-4.514 0-1.21.206-2.285.628-3.22.423-.95 1.039-1.692 1.852-2.213zm.933 2.344c-.441.65-.684 1.665-.684 3.088 0 1.416.241 2.426.679 3.074.424.626 1.055.948 1.945.948.888 0 1.519-.323 1.944-.953.438-.652.68-1.667.68-3.09 0-1.416-.24-2.426-.675-3.074-.421-.627-1.047-.947-1.928-.947-.897 0-1.533.323-1.961.954z" />
                <path d="M158.256 8.111c-.767 0-1.478.185-2.126.556l-.003.002a4.69 4.69 0 00-1.11.904l-.123-1.204h-2.27V20.3h2.578v-8.254c.374-.587.766-1.027 1.17-1.33a2.281 2.281 0 011.411-.457c.532 0 .884.148 1.112.397.223.245.373.715.373 1.496V20.3h2.578v-8.427c0-1.13-.31-2.057-.963-2.743-.643-.69-1.532-1.019-2.627-1.019zM140.648 8.37h2.578v8.211c0 .752.135 1.215.338 1.462.193.222.534.367 1.104.367.942 0 1.791-.538 2.538-1.741v-8.3h2.578V20.3h-2.274l-.104-1.22a4.206 4.206 0 01-1.102.963l-.005.003c-.614.347-1.349.512-2.19.512-1.054 0-1.915-.323-2.542-.999-.626-.674-.919-1.61-.919-2.762V8.369z" />
            </g>
            <title id="logo__title">Proton Account</title>
        </svg>
    );
};

export default AccountLogo;