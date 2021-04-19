import Head from 'next/head';

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