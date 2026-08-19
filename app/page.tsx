import { TodoList } from "@/components/todo-list"
import { ThemeToggle } from "@/components/theme-toggle"
import { AuroraText } from "@/components/ui/aurora-text"

export default function Page() {
  const title = (
    <h1 className="text-3xl font-bold tracking-tight">
      ✨ <AuroraText>오늘 뭐 할까요?</AuroraText>
    </h1>
  )

  return (
    <div className="flex min-h-svh justify-center p-6">
      <div className="flex w-full max-w-md min-w-0 flex-col gap-6">
        <div className="flex items-start justify-between gap-2">
          {title}
          <ThemeToggle />
        </div>
        <TodoList />
      </div>
    </div>
  )
}
