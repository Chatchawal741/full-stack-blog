import Image from "./Image";

function Comment() {
  return (
    <div className="p-4 bg-slate-50 rounded-xl mb-8">
      {/* user avatar */}
      <div className="flex items-center gap-4">
        <Image
          src={"userImg.jpeg"}
          className={"w-10 h-10 rounded-full object-cover"}
          w={"40"}
        />
        <span className="text-medium">John Doe</span>
        <span className="text-sm text-gray-500">2 days ago</span>
      </div>
      {/* comment section */}
      <div className="mt-4">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus ipsam delectus ratione, quidem, reprehenderit maxime
          iure esse quaerat aliquid ex adipisci? Quisquam sunt hic quo tempora
          magnam, quidem harum aut nulla provident cupiditate sapiente a dolorum
          natus atque architecto ab. Soluta alias facere tempore corrupti fugit
          consequuntur aperiam ad temporibus?
        </p>
      </div>
    </div>
  );
}

export default Comment;
