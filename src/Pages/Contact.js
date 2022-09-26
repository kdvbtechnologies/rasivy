import ContactAction from "../components/ContactAction";
import Navigation from "../components/Navigation";

export default function Contact() {
  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };
  return (
    <div style={family}>
      <Navigation />
      <ContactAction />
    </div>
  );
}
