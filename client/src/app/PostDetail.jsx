import React from "react";
import PostAuthor from "../components/PostAuthor";
import { Link } from "react-router-dom";
import Thumbnail from "../images/blog22.jpg";

const PostDetail = () => {
  return (
    <section className="post-detail">
      <div className="container post-detail__container">
        <div className="post-detail__header">
          <PostAuthor />
          <div className="post-detail__buttons">
            <Link to={`/posts/werwer/edit`} className="btn sm primary">
              Edit
            </Link>
            <Link to={`/posts/werwer/delete`} className="btn sm danger">
              Delete
            </Link>
          </div>
        </div>
        <h1>This is Post title</h1>
        <div className="post-detail__thumbnail">
          <img src={Thumbnail} alt="blog-thumbnail" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          voluptatibus recusandae nostrum alias ex asperiores atque, laboriosam
          accusantium ipsam distinctio voluptate iusto. Qui in excepturi
          blanditiis repellendus repudiandae, amet veritatis veniam fugiat
          labore deserunt accusamus. Maiores ex natus nam saepe!
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil sequi
          molestiae accusamus beatae laboriosam labore atque modi at ab dolor,
          aliquid quis illum pariatur id? Veniam, corporis similique deserunt,
          suscipit exercitationem excepturi quos soluta voluptatibus quidem,
          nihil consectetur tempora omnis sed officia deleniti ipsum est.
          Cupiditate placeat expedita fugit minus non esse dolorem nemo ex?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora eum
          corporis esse ullam, exercitationem eveniet explicabo quo nam
          voluptatibus tempore velit, quasi quaerat. Ea, minima sequi tempore
          fugiat quam culpa reiciendis nemo assumenda? Ducimus assumenda cum
          placeat in tempora, ad quaerat aliquid suscipit corporis tenetur non
          repellat voluptatum enim voluptates quod adipisci laboriosam iure
          alias atque asperiores. Pariatur eum nobis sed a impedit rerum
          accusamus, enim nostrum, eligendi nam quae ex asperiores hic ut magnam
          consequuntur dolorem necessitatibus modi! Totam, est sapiente neque
          laborum fugiat ullam ducimus autem natus odio libero eaque modi iusto
          similique nostrum facilis? Velit, saepe. Voluptas, ea veritatis dicta
          voluptatum porro veniam inventore corporis ab vitae itaque.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo nisi
          molestiae neque in numquam reprehenderit, iure necessitatibus ullam
          sequi quia.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum
          perferendis quasi velit obcaecati asperiores aliquid soluta
          voluptatibus. Velit hic non reiciendis laboriosam quibusdam suscipit
          nesciunt vero? Laborum animi repellendus ad, voluptates porro, numquam
          culpa a tempora, dignissimos iste ut quia. Cum cumque numquam error
          accusantium facilis ab rem sint explicabo, aliquam laboriosam!
          Pariatur sit facere, molestias ex ab tenetur laudantium corrupti
          magnam accusantium dolore, soluta consequuntur impedit. Impedit quam
          atque velit, odio itaque praesentium iure minima esse quidem maiores
          sunt? Dolores eligendi inventore necessitatibus deleniti distinctio
          vitae hic minima quisquam voluptas corrupti ullam porro, iure eum
          magni officia quibusdam laudantium rem voluptatem molestiae, modi
          placeat ab molestias in ea. Minus, eveniet. Hic, architecto iure?
          Totam qui eius maiores praesentium tempora voluptatum sint dolorum
          aperiam. Consectetur officia sunt esse cupiditate molestiae, vitae
          officiis quos dicta assumenda enim quibusdam, quae soluta dolore,
          atque id. Animi iste et praesentium eos ratione earum! Tempora dolores
          reprehenderit necessitatibus! At commodi impedit officiis, fuga
          nesciunt nemo dolor. Sapiente consequuntur, voluptatibus libero id
          iste debitis nostrum a praesentium cumque, neque temporibus molestiae
          cum voluptatum explicabo numquam, ratione laborum maiores quaerat
          repellat enim illum necessitatibus quisquam. A quia inventore itaque
          natus nobis accusamus sapiente fugit aspernatur. Assumenda, nulla!
        </p>
      </div>
    </section>
  );
};

export default PostDetail;
