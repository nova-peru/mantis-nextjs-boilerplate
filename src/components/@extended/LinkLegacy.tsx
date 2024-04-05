import Link from "next/link";

function LinkLegacy(props: any) {
  return (
    <Link legacyBehavior href={""} {...props}>
      <a>{props.children}</a>
    </Link>
  );
}

export default LinkLegacy;
