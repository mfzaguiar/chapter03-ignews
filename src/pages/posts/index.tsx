import { GetStaticProps } from 'next';
import Head from 'next/head';
import Prismic from '@prismicio/client';

import { getPrismicClient } from '../../services/prismic';

import styles from './styles.module.scss';

export default function Posts() {
    return (
        <>
            <Head>
                <title>Posts | Ignews</title>
            </Head>

            <main className={styles.container}>
                <div className={styles.posts}>
                   <a href="#">
                    <time>12 de abril de 2021</time>
                        <strong>Teste Título</strong>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, inventore et. Sed perferendis id pariatur! Enim aliquam libero hic tempore commodi aperiam cupiditate accusantium maxime temporibus non? Libero, blanditiis expedita?</p>
                   </a>
                   <a href="#">
                    <time>12 de abril de 2021</time>
                        <strong>Teste Título</strong>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, inventore et. Sed perferendis id pariatur! Enim aliquam libero hic tempore commodi aperiam cupiditate accusantium maxime temporibus non? Libero, blanditiis expedita?</p>
                   </a>
                   <a href="#">
                    <time>12 de abril de 2021</time>
                        <strong>Teste Título</strong>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, inventore et. Sed perferendis id pariatur! Enim aliquam libero hic tempore commodi aperiam cupiditate accusantium maxime temporibus non? Libero, blanditiis expedita?</p>
                   </a>
                </div>
            </main>
        </>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const prismic = getPrismicClient();
    
    const response = await prismic.query(
      [  Prismic.Predicates.at('document.type', 'post') ],
       { 
           fetch: ['post.title', 'post.content'],
           pageSize: 100
       }
    )

    console.log(response)

    return {
        props: {

        }
    }
}