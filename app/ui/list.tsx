export default function List({
  data,
  large,
}: {
  data: { title: string; desc: string; note?: string }[];
  large?: boolean;
}) {
  return (
    <ul className={`cursor-default flex flex-col ${large ? "gap-6" : "gap-4"}`}>
      {data.map((item, index) => (
        <li key={index} className="pl-0.5">
          {large ? (
            <>
              <div>
                <h4 className="font-semibold text-base leading-tight">{item.title}</h4>
                {item.note && (
                  <span className="text-sm text-gray-500">{item.note}</span>
                )}
              </div>
              <ul className="mt-2 ml-4 flex flex-col gap-1 list-disc text-sm text-gray-700">
                <li>{item.desc}</li>
              </ul>
            </>
          ) : (
            <>
              <h4 className="font-semibold text-lg leading-tight mb-0.5">{item.title}</h4>
              {item.note && (
                <p className="text-sm underline decoration-dotted underline-offset-2 text-gray-600 mb-0.5">
                  {item.note}
                </p>
              )}
              <p className="text-gray-600 leading-tight text-base">{item.desc}</p>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}
