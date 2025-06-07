import './Options.css';

export const Options = () => {
  const fields = Array.from({ length: 7 });

  return (
    <div className="block-calendar-content">
      {fields.map((_, index) => (
        <div key={index} className="calendar-field"></div>
      ))}
    </div>
  );
};
