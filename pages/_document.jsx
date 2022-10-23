import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang='en'>
			<Head>
                <link href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@500,700,400,300&display=swap" rel="stylesheet" />
                <link href="http://fonts.cdnfonts.com/css/graphik" rel="stylesheet" />
                <link href="http://fonts.cdnfonts.com/css/monea-alegante" rel="stylesheet" />
            </Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
