import classes from "./Notification.module.css";

const Notification = (props) => {
  let specialClasses = "";

  if (props.status === "loading") {
    specialClasses = classes.loading;
  }

  if (props.status === "error") {
    specialClasses = classes.error;
  }
  if (props.status === "success") {
    specialClasses = classes.success;
  }

  const cssClasses = `${classes.notification} ${specialClasses}`;

  return (
    <section className={cssClasses}>
      <h2>{props.title}</h2>
    </section>
  );
};

export default Notification;
