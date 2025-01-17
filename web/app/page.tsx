import { Header } from "@/components/header";
import { SearchBar } from "@/components/search-bar";
import FilterByAuthor from "@/components/filter-by-author";
import { DeleteSelectedPosts } from "@/components/delete-selected-posts";
import { AddPost } from "@/components/add-post";
import { PostsTable } from "@/components/posts-table";
import { PostsTablePagination } from "@/components/posts-table-pagination";

export default function Home() {
  return (
    <main className="space-y-8 p-8 font-sans">
      <Header />
      <div className="space-y-4">
        <section className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <SearchBar />
            <FilterByAuthor />
            <DeleteSelectedPosts />
          </div>
          <AddPost />
        </section>
        <PostsTable posts={data} />
        <PostsTablePagination />
      </div>
    </main>
  );
}

const data = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];
