import Image from "../components/Image";
import { Link } from "react-router-dom";
import PostMenuActions from "../components/PostMenuActions";
import Search from "../components/Search";
import Comments from "../components/Comments";

function SinglePostPage() {
  return (
    <div className="flex flex-col gap-8">
      {/* details */}
      <div className="flex gap-8">
        {/* text */}
        <div className="lg:w-3/5 flex flex-col gap-8">
          {/* title */}
          <h1 className="md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
            perferendis.
          </h1>
          {/* descriptions */}
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Written by</span>
            <Link className="text-blue-800">John Doe</Link>
            <span>on</span>
            <Link className="text-blue-800">Web Design</Link>
            <span>2 days ago</span>
          </div>
          <p className="text-gray-500 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
            laudantium excepturi obcaecati molestias rem libero nam dolores
            similique quas nisi?
          </p>
        </div>
        {/* image */}
        <div className="hidden lg:block w-2/5">
          <Image src={"postImg.jpeg"} className={"rounded-2xl"} />
        </div>
      </div>
      {/* content */}
      <div className="flex flex-col md:flex-row gap-12">
        {/* text */}
        <div className="lg:text-lg flex flex-col gap-6 text-justify">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
            quaerat dolores nemo quibusdam magni consequatur veritatis obcaecati
            unde aliquam officiis beatae rem at iure, quisquam non tempora,
            molestiae soluta aut? Veritatis aperiam a eaque eligendi, quae quam
            libero aspernatur! Similique maiores deleniti dolorem dolore
            expedita culpa quis et nam suscipit?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
            quis, voluptatem harum totam dicta, vitae facilis commodi quos ut
            accusamus vero repellat modi quod perferendis animi voluptas labore
            mollitia! Doloremque.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores ex
            modi impedit exercitationem, cumque repellat sit perspiciatis sunt
            minima numquam! Quas, debitis molestias eligendi et id provident
            exercitationem, architecto maxime rem magnam labore accusamus, quia
            quos fugiat enim ea maiores.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit velit
            corporis incidunt in non, voluptatibus officia totam sint, placeat
            inventore rem, quod esse officiis. Nulla quidem voluptatum maxime
            veritatis cumque commodi fuga deleniti optio dolores! Ducimus
            assumenda blanditiis earum delectus eveniet odio. Sapiente
            perferendis recusandae, minima voluptatibus illo perspiciatis
            praesentium tempora ratione nam ipsa? Nesciunt autem magni
            recusandae dicta enim voluptatibus iste quod sequi est totam
            inventore ducimus numquam doloribus illo corrupti suscipit facilis
            harum, obcaecati consectetur pariatur officia quia.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit velit
            corporis incidunt in non, voluptatibus officia totam sint, placeat
            inventore rem, quod esse officiis. Nulla quidem voluptatum maxime
            veritatis cumque commodi fuga deleniti optio dolores! Ducimus
            assumenda blanditiis earum delectus eveniet odio. Sapiente
            perferendis recusandae, minima voluptatibus illo perspiciatis
            praesentium tempora ratione nam ipsa? Nesciunt autem magni
            recusandae dicta enim voluptatibus iste quod sequi est totam
            inventore ducimus numquam doloribus illo corrupti suscipit facilis
            harum, obcaecati consectetur pariatur officia quia.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit velit
            corporis incidunt in non, voluptatibus officia totam sint, placeat
            inventore rem, quod esse officiis. Nulla quidem voluptatum maxime
            veritatis cumque commodi fuga deleniti optio dolores! Ducimus
            assumenda blanditiis earum delectus eveniet odio. Sapiente
            perferendis recusandae, minima voluptatibus illo perspiciatis
            praesentium tempora ratione nam ipsa? Nesciunt autem magni
            recusandae dicta enim voluptatibus iste quod sequi est totam
            inventore ducimus numquam doloribus illo corrupti suscipit facilis
            harum, obcaecati consectetur pariatur officia quia.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit velit
            corporis incidunt in non, voluptatibus officia totam sint, placeat
            inventore rem, quod esse officiis. Nulla quidem voluptatum maxime
            veritatis cumque commodi fuga deleniti optio dolores! Ducimus
            assumenda blanditiis earum delectus eveniet odio. Sapiente
            perferendis recusandae, minima voluptatibus illo perspiciatis
            praesentium tempora ratione nam ipsa? Nesciunt autem magni
            recusandae dicta enim voluptatibus iste quod sequi est totam
            inventore ducimus numquam doloribus illo corrupti suscipit facilis
            harum, obcaecati consectetur pariatur officia quia.
          </p>
        </div>
        {/* MENU */}
        <div className="px-4 h-max sticky top-8">
          {/* author */}
          <h1 className="mb-4 text-sm font-medium">Author</h1>
          <div className="flex flex-col gap-4">
            <div className="flex gap-8 items-center">
              <Image
                src={"userImg.jpeg"}
                className={"w-12 h-12 object-cover rounded-full"}
                w={"48"}
                h={"48"}
              />
              <Link className="text-blue-800">John Doe</Link>
            </div>
            <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet.</p>
            <div className="flex gap-2">
              <Link>
                <Image src={"facebook.svg"} w={"28"} h={"28"} />
              </Link>
              <Link>
                <Image src={"instagram.svg"} w={"28"} h={"28"} />
              </Link>
            </div>
          </div>
          {/* actions */}
          <PostMenuActions />
          {/* categories */}
          <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
          <div className="flex flex-col gap-2 text-sm">
            <Link className="underline">All</Link>
            <Link className="underline" to={"/"}>
              Web Design
            </Link>
            <Link className="underline" to={"/"}>
              Development
            </Link>
            <Link className="underline" to={"/"}>
              Detabase
            </Link>
            <Link className="underline" to={"/"}>
              Search Engines
            </Link>
            <Link className="underline" to={"/"}>
              Marketing
            </Link>
          </div>
          {/* search */}
          <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
          <Search />
        </div>
      </div>
      {/* Comments */}
      <Comments />
    </div>
  );
}

export default SinglePostPage;
