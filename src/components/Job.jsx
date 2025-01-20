export default function Job({ time, jobTitle, description }) {
  return (
    <>
      <div className="absolute w-3 h-3  rounded-full mt-1.5 -start-1.5 border border-[#888585] bg-[#888585]"></div>
      <time className="mb-1 text-sm font-normal leading-none text-white">
        {time}
      </time>
      <h3 className="text-lg font-semibold text-yellow-400">{jobTitle}</h3>
      <p className="mb-4 text-base font-normal text-[#888585]">{description}</p>
    </>
  );
}
