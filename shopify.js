//shopify basic application
/*<![CDATA[*/


(function () {
    var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
            ShopifyBuyInit();
        } else {
            loadScript();
        }
    } else {
        loadScript();
    }
    function loadScript() {
        var script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
        script.onload = ShopifyBuyInit;
    }
    function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
            domain: 'ghostriderbikes.myshopify.com',
            storefrontAccessToken: '91496fc51af8187c55ba0a8286e390ba',
        });
        ShopifyBuy.UI.onReady(client).then(function (ui) {
            ui.createComponent('product', {
                id: '6195435536557',
                node: document.getElementById('product-component-1611350646515'),
                moneyFormat: '%24%7B%7Bamount%7D%7D',
                options: {
                    "product": {
                        "styles": {
                            "product": {
                                "@media (min-width: 601px)": {
                                    "max-width": "100%",
                                    "margin-left": "0",
                                    "margin-bottom": "50px",
                                    "padding-right": "10px",
                                },

                                "text-align": "left"
                            },
                            "title": {
                                "font-family": "Helvetica neue",
                                "font-weight": "900",
                                "font-size": "32px",
                                "letter-spacing": "3px",
                                "text-align": "right",
                                "font-style": "italic",
                                "background-image": "linear-gradient(to bottom, #FF3E01, #FF0045)",
                                "-webkit-text-fill-color": "transparent",
                                "-webkit-background-clip": "text",
                            },
                            "button": {
                                "font-family": "Source Sans Pro, sans-serif",
                                "font-weight": "300",
                                "font-size": "16px",
                                "letter-spacing": "4px",
                                "padding-top": "8px",
                                "padding-bottom": "8px",
                                "transform": "skewx(-10deg)",
                                "border-radius": "0px",
                                "padding-left": "30px",
                                "padding-right": "30px",
                                "background-image": "linear-gradient(to bottom, #FF3E01, #FF0045)",
                                ":hover": {
                                    "background-image": "linear-gradient(to right, #be2904, #8f0729)",
                                },
                                "background-color": "#ff0045",
                                ":focus": {
                                    "background-color": "#e6003e",
                                    "outline": "none",
                                },
                            },
                            "buttonWrapper": {
                                "text-align": "right",
                                "margin": "0px 5px 0 0",
                            },
                            "quantityInput": {
                                "font-size": "16px",
                                "padding-top": "16px",
                                "padding-bottom": "16px"
                            },
                            "price": {
                                "font-family": "Source Sans Pro, sans-serif",
                                "font-weight": "700",
                                "letter-spacing": "5px",
                                "font-size": "26px",
                                "background-image": "linear-gradient(to bottom, #FF3E01, #FF0045)",
                                "-webkit-text-fill-color": "transparent",
                                "-webkit-background-clip": "text",
                                "font-style": "italic",
                                "margin": "0px 0px 0 0",
                            },
                            "prices": {
                                "text-align": "right",
                            },
                            "compareAt": {
                                "font-family": "Source Sans Pro, sans-serif",
                                "font-weight": "900",
                                "font-size": "15.299999999999999px",
                                "color": "#ff0045"
                            },
                            "unitPrice": {
                                "font-family": "Source Sans Pro, sans-serif",
                                "font-weight": "bold",
                                "font-size": "15.299999999999999px",
                                "color": "#ff0045",
                                "font-style": "italic",
                            },
                            "description": {
                                "font-family": "Source Sans Pro, sans-serif",
                                "font-weight": "300",
                                "letter-spacing": "1px",
                                "text-align": "right",
                                "font-style": "italic",
                                "padding-bottom": "30px",
                                "font-size": "16px",
                                "color": "#555",
                            },
                            "imgWrapper": {
                                "margin-top": "18px",
                            },
                        },
                        "layout": "horizontal",
                        "contents": {
                            "img": true,
                            "imgWithCarousel": false,
                            "description": true,
                        },
                        "width": "100%",
                        "text": {
                            "button": "BUY NOW",
                        },
                        "googleFonts": [
                            "Open Sans"
                        ],
                        order: [
                            'img',
                            'imgWithCarousel',
                            'title',
                            'description',
                            'variantTitle',
                            'options',
                            'quantity',
                            'properties',
                            'price',
                            'button',
                            'buttonWithQuantity',
                        ],
                    },
                    "productSet": {
                        "styles": {
                            "products": {
                                "@media (min-width: 601px)": {
                                    "margin-left": "-20px"
                                }
                            }
                        }
                    },
                    "modalProduct": {
                        "contents": {
                            "img": false,
                            "imgWithCarousel": true,
                            "button": false,
                            "buttonWithQuantity": true
                        },
                        "styles": {
                            "product": {
                                "@media (min-width: 601px)": {
                                    "max-width": "100%",
                                    "margin-left": "0px",
                                    "margin-bottom": "0px"
                                }
                            },
                            "button": {
                                "font-family": "Source Sans Pro, sans-serif",
                                "font-weight": "300",
                                "font-size": "16px",
                                "padding-top": "16px",
                                "padding-bottom": "16px",
                                ":hover": {
                                    "background-color": "#e6003e"
                                },
                                "background-color": "#ff0045",
                                ":focus": {
                                    "background-color": "#e6003e"
                                },
                                "border-radius": "0px",
                                "padding-left": "60px",
                                "padding-right": "60px"
                            },
                            "quantityInput": {
                                "font-size": "16px",
                                "padding-top": "16px",
                                "padding-bottom": "16px"
                            }
                        },
                        "googleFonts": [
                            "Source Sans Pro"
                        ],
                        "text": {
                            "button": "BUY NOW"
                        }
                    },
                    "option": {
                        "styles": {
                            "label": {
                                "font-family": "Source Sans Pro, sans-serif",
                                "font-weight": "300",
                                "transform": "skewx(-10deg)",
                            },
                            "select": {
                                "font-family": "Source Sans Pro, sans-serif",
                                "font-weight": "300",
                                "letter-spacing": "4px",
                                "transform": "skewx(-10deg)",
                                "outline": "none",
                                "color": "#555",
                            },
                            "wrapper": {
                                "transform": "skewx(-10deg)",
                                "border-radius": "0",
                                "border": "1px grey solid",
                                "margin": "0 5px 10px 5px",
                            }
                        },

                        "googleFonts": [
                            "Source Sans Pro"
                        ],

                    },
                    "cart": {
                        "styles": {
                            "button": {
                                "font-family": "Source Sans Pro, sans-serif",
                                "font-weight": "300",
                                "letter-spacing": "5px",
                                "font-weight": "bold",
                                "font-size": "16px",
                                "padding-top": "16px",
                                "padding-bottom": "16px",
                                ":hover": {
                                    "background-color": "#e6003e"
                                },
                                "background-image": "linear-gradient(to bottom, #FF3E01, #FF0045)",
                                ":focus": {
                                    "background-color": "#e6003e"
                                },
                                "border-radius": "0px"
                            }
                        },
                        "text": {
                            "total": "SUBTOTAL",
                            "button": "CHECKOUT",
                            "title": "CART",
                        },
                        "googleFonts": [
                            "Source Sans Pro"
                        ]
                    },
                    "toggle": {
                        "styles": {
                            "toggle": {
                                "font-family": "Source Sans Pro, sans-serif",
                                "font-weight": "900",
                                "background-image": "linear-gradient(to bottom, #FF3E01, #FF0045)",
                                ":hover": {
                                    "background-color": "#e6003e"
                                },
                                ":focus": {
                                    "background-color": "#e6003e"
                                }
                            },
                            "count": {
                                "font-size": "16px"
                            }
                        },
                        "googleFonts": [
                            "Source Sans Pro"
                        ]
                    }
                },
            });
        });
    }
})();

