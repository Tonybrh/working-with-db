import { GetStaticPaths, GetStaticProps } from 'next';
import Stripe from 'stripe';
import stripeConfig from '../config/stripe';
const Skus: React.FC = () => {
    return <h1>Products</h1>;
};
export const getStaticPaths: GetStaticPaths = async () => {
    const stripe = new Stripe(stripeConfig.secretKey, {
        apiVersion: '2023-10-16'
    });

    const products = await stripe.products.list();
    const paths = products.data.map(sku => ({
        params: {
            skuId: sku.id
        }
    }));
    console.log(paths);

    return {
        paths: [],
        fallback: false
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const stripe = new Stripe(stripeConfig.secretKey, {
        apiVersion: '2023-10-16'
    });

    console.log(params);

    const sku = await stripe.products.retrieve(params.skuId as string);

    return {
        props: {}
    };

    return {
        props: {}
    };
};
export default Skus;
