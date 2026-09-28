import { CATEGORIES, STATUS_FILTERS } from "../constants";

function FilterBar({
  statusFilter,
  setStatusFilter,
  categoryFilter,
  setCategoryFilter,
  activeCount,
  completedCount,
}) {
  return (
    <div className="filter-bar">
      <p className="counts">
        <strong>{activeCount}</strong> remaining · <strong>{completedCount}</strong>{" "}
        completed
      </p>

      <div className="filter-controls">
        <div className="status-buttons">
          {STATUS_FILTERS.map((status) => (
            <button
              key={status}
              type="button"
              className={statusFilter === status ? "active" : ""}
              onClick={() => setStatusFilter(status)}
            >
              {status}
            </button>
          ))}
        </div>

        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          aria-label="Filter by category"
        >
          <option value="All">All categories</option>
          {CATEGORIES.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default FilterBar;
