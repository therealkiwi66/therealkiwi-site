import React from "react";

export default function SlugPage({ slug }) {
    return (
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Prismatik - Thank You For Your Purchase</title>
                <style>
                    {`
                    * {
                        margin: 0;
                        padding: 0;
                        box-sizing: border-box;
                    }

                    body {
                        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                        background-color: #f8f9fa;
                        color: #333;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100vh;
                        text-align: center;
                    }

                    .container {
                        max-width: 600px;
                        padding: 2rem;
                        background-color: white;
                        border-radius: 8px;
                        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    }

                    .logo {
                        margin-bottom: 2rem;
                    }

                    .logo img {
                        max-width: 200px;
                        height: auto;
                    }

                    h1 {
                        font-size: 1.8rem;
                        margin-bottom: 1rem;
                        color: #2d3748;
                    }

                    p {
                        font-size: 1.1rem;
                        margin-bottom: 1.5rem;
                        color: #4a5568;
                        line-height: 1.5;
                    }

                    .success-message {
                        margin-top: 2rem;
                        font-size: 1.2rem;
                        color: #38a169;
                        font-weight: 500;
                    }

                    .spinner {
                        margin: 1.5rem auto;
                        width: 60px;
                        height: 60px;
                        border: 5px solid rgba(0, 0, 0, 0.1);
                        border-radius: 50%;
                        border-top-color: #38a169;
                        animation: spin 1s ease-in-out infinite;
                    }

                    @keyframes spin {
                        to {
                            transform: rotate(360deg);
                        }
                    }
                    `}
                </style>
            </head>
            <body>
                <div className="container">
                    <div className="logo">
                        <img
                            src="https://i.ibb.co/8ghjgg45/kiwi.png"
                            alt="Prismatik Logo"
                        />
                    </div>

                    <h1>Cart secured!</h1>

                    <p>Your transaction has been completed successfully.</p>

                    <div className="spinner"></div>

                    <p className="success-message">
                        Use Prismatik extension to complete checkout.
                    </p>
                </div>

                <script>
                    // Prendere l'URL dalla barra degli indirizzi
                    const urlPath = window.location.pathname;

                    // Modificare la barra degli indirizzi per mostrare sempre la stessa pagina
                    if (urlPath) {
                        history.pushState(null, null, urlPath);
                    }
                </script>
            </body>
        </html>
    );
}

export async function getServerSideProps({ params }) {
    return {
        props: {
            slug: params.slug || "default", // Ottieni lo slug dall'URL
        },
    };
}
