import { Counter } from "@/components/Counter";

export default function Home() {
  const name = "Hello About";
  return (
    <main>
      <h1>웹서버보안프로그래밍</h1>
      <Counter />
      <br />

      <Link href="/about"> /About 페이지로 이동하기 </Link>
    </main>
  );
}
