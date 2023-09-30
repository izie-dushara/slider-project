import Image from "./Image";
import Button from "./Button";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Content = ({ people, index, setIndex }) => {
  return (
    <div className="section-center">
      {people.map((person, personIndex) => {
        const { id, image, name, title, quote } = person;

        // default values
        let position = "nextSlide";

        // Render the current person based on the index
        if (personIndex === index) {
          position = "activeSlide";
        }

        // Slide previously to the current person
        if (
          personIndex === index -1 ||
          (index === 0 && personIndex === people.length -1)
        ) {
          position = "lastSlide";
        }

        return (
          <Image
            key={id}
            position={position}
            image={image}
            name={name}
            title={title}
            quote={quote}
          />
        );
      })}
      <Button
        btnClass="prev"
        icon={<FiChevronLeft />}
        onClick={() => setIndex(index - 1)}
      />
      <Button
        btnClass="next"
        icon={<FiChevronRight />}
        onClick={() => setIndex(index + 1)}
      />
    </div>
  );
};

export default Content;
