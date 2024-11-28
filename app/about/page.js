import Hero from "../components/Hero/Hero";
import styles from './about.module.css';

export default function about() {
  return (
    <>
      <Hero title='about us.'></Hero>

      <br></br>

      <div className={styles.containerR}>
        <div className={styles.contentR}>
            <h3 className={styles.h3R}>Welcome to The Golden Wheat Bakery</h3>
            <p className={styles.pR}>
                Nestled in the heart of our community, The Golden Wheat Bakery is where tradition meets taste in every bite! We take pride in offering a delightful selection of handcrafted artisan bread, mouthwatering pastries, and savory buns—all made with love and dedication.
            </p>
        </div>
        <div className={styles.imgcontainerR}>
            <img className={styles.imageR} src="portrait-confident-young-male-baker-front-baked-croissant-shelves.jpg" alt="Baker with croissants" />
        </div>
      </div>

      <br></br>

      <div className={styles.containerL}>
        <div className={styles.imgcontainerL}>
            <img className={styles.imageL} src="baker-holding-metal-tray-full-fresh-croissants-illuminated-with-lovely-light-from-window-ai-generative.jpg" alt="Baker holding a tray of croissants" />
        </div>
        <div className={styles.contentL}>
            <h3 className={styles.h3L}>Our Commitment to Quality</h3>
            <p className={styles.pL}>
            At The Golden Wheat Bakery, quality is at the heart of everything we do. We carefully choose the finest, freshest ingredients to ensure each product is made to perfection. By preserving the art of traditional baking methods, we create products that are not only delicious but also authentic in flavor and texture.
            Whether it’s our soft, golden loaves of bread, flaky, buttery pastries, or savory buns, each item is a labor of love, baked with care to bring you a truly memorable experience.
            </p>
        </div>
      </div>

      <br></br>

      <div className={styles.containerR}>
        <div className={styles.contentR}>
            <h3 className={styles.h3R}>What Makes Us Special</h3>
            <p className={styles.pR}>
            Our loyal customers know us for the warmth of our products and our inviting atmosphere. We believe in creating a place where everyone feels like family, and that’s why we are excited to expand our reach and connect with even more of you.
            </p>
        </div>
        <div className={styles.imgcontainerR}>
            <img className={styles.imageR} src="delicious-freshly-baked-breads.jpg" alt="Freshly baked breads" />
        </div>
      </div>

      <br></br>

      <div className={styles.containerL}>
        <div className={styles.imgcontainerL}>
            <img className={styles.imageL} src="top-view-delicious-cinnamon-rolls-concept.jpg" alt="Cinnamon rolls" />
        </div>
        <div className={styles.contentL}>
            <h3 className={styles.h3L}>Exciting New Developments</h3>
            <p className={styles.pL}>
            With the launch of our new website, we aim to enhance customer engagement and provide an easy way for you to explore our full menu, make online orders, and stay up-to-date on special offerings and promotions. We’re thrilled to bring our passion for baking to you, both in-store and online!
            </p>
        </div>
      </div>

      <br></br>

      <div className={styles.containerR}>
        <div className={styles.contentR}>
            <h3 className={styles.h3R}>Thank You for Being Part of Our Journey</h3>
            <p className={styles.pR}>
            We’re so grateful to all of you who have supported us along the way. Thank you for being a part of The Golden Wheat Bakery’s journey, and we look forward to sharing many more delicious moments with you!
            </p>
        </div>
        <div className={styles.imgcontainerR}>
            <img className={styles.imageR} src="freshly-baked-bread-sweet-buns-table-generated-by-ai.jpg" alt="Sweet buns" />
        </div>
      </div>
    </>
  );
}
