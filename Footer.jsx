import "./footer.css";
export default function Footer() {
  const date = new Date();
  return (
    <div className="foot">
      <b>This site is Created by Ramesh kumar </b>@ copyright{" "}
      {date.getFullYear()}
    </div>
  );
}
