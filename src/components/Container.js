export default function Container({ children }) {
  return (
    <div className="p-10 lg:p-20 lg:pb-96 pt-32 xl:w-3/5 w-5/7 mx-auto">
      {children}
    </div>
  );
}
