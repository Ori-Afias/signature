export const Input = ({ label, value, onChange }) => {
  return (
    <div className='flex flex-col mb-4'>
      <label className='text-sm mb-1'>{label}</label>
      <input className='border border-gray-300 rounded-md p-2' value={value} onChange={onChange} />
    </div>
  );
};
