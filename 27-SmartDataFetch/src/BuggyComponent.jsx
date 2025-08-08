function BuggyComponent() {
  throw new Error("💥 Boom! This is a test error");
  return <p>This will not render.</p>;
}

export default BuggyComponent;
