export default function MealDetailsPage({ params }) {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>
        {params.mealSlug} Detail Page
      </h1>
    </main>
  );
}
