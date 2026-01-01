import Image from 'next/image';
import { useState } from 'react';

const ReviewCard = ({ review }) => {
  const { user, photo, rating, review: text, likes = [], date } = review;

  // const [liked, setLiked] = useState(likes.includes(currentUserEmail));
  // const [likeCount, setLikeCount] = useState(likes.length);

  // const handleLike = () => {
  //   if (liked) {
  //     setLikeCount((prev) => prev - 1);
  //   } else {
  //     setLikeCount((prev) => prev + 1);
  //   }
  //   setLiked(!liked);
  // };

  return (
    <div className="bg-white shadow-md rounded-2xl p-5">
      {/* header */}
      <div className="flex items-center gap-4 mb-3">
        {/* <img
          src={photo}
          alt={user}
          className="w-12 h-12 rounded-full object-cover"
        /> */}

        <Image
          src={photo}
          alt={user}
          className="w-12 h-12 rounded-full object-cover"
          height={50}
          width={50}
        />

        <div>
          <h4 className="font-semibold">{user}</h4>
          <p className="text-sm text-gray-500">
            {new Date(date).toLocaleDateString()}
          </p>
        </div>
      </div>

      {/* rating */}
      <div className="flex mb-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className={i < rating ? 'text-yellow-400' : 'text-gray-300'}
          >
            ★
          </span>
        ))}
      </div>

      {/* review text */}
      <p className="text-gray-700 mb-4">{text}</p>

      {/* actions */}
      <button
        // onClick={handleLike}
        className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm transition bg-gray-100 hover:bg-gray-200"
      >
        {/* <ThumbsU size={16} /> */}
        {/* {likeCount}  */} 20
      </button>
    </div>
  );
};

export default ReviewCard;
