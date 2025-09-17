
import { useState } from "react"

export default function ProtectedPage() {
  const [message, setMessage] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const res = await fetch("/api/protected", {
      method: "POST",
    })

    const data = await res.json()
    setMessage(data.content || data.error)
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-900 text-white rounded-xl">
      <h1 className="text-xl font-bold mb-4">Protected Route Test</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
        >
          Get Protected Content
        </button>
      </form>

      {message && (
        <p className="mt-4 p-2 bg-gray-800 rounded">{message}</p>
      )}
    </div>
  )
}
