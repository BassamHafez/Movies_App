import { SubmitBtn } from "@/shared/components";
import { useDispatch, useSelector, useState } from "@/shared/hooks";
import { filterSidebarActions } from "@/store/filterSidebar-slice";

const FiltersSection = ({ onClose }) => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filterSidebar.filters);
  const [formValues, setFormValues] = useState(filters);

  const handleChange = (key, value) => {
    setFormValues((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(filterSidebarActions.setAllFilters(formValues));
    onClose?.();
  };

  const handleCancel = () => {
    setFormValues({ include_adult: false, primary_release_year: null });
    onClose?.();
  };

  return (
    <div className="flex flex-col gap-3">
      <form onSubmit={handleSubmit}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-lg border p-4">
          <legend className="fieldset-legend">Include Adult</legend>
          <label className="label">
            <input
              type="checkbox"
              className="checkbox checkbox-xs rounded-sm"
              checked={formValues.include_adult}
              onChange={(e) => handleChange("include_adult", e.target.checked)}
              name="adultCheckbox"
            />
            Only Adults
          </label>
        </fieldset>

        <fieldset className="fieldset bg-base-200 border-base-300 rounded-lg border p-4">
          <legend className="fieldset-legend">Release Year</legend>

          <input
            type="number"
            className="input input-bordered input-sm rounded-md"
            value={formValues.primary_release_year || ""}
            onChange={(e) =>
              handleChange(
                "primary_release_year",
                Number(e.target.value) || null
              )
            }
            placeholder="Year"
            name="releaseYear"
          />
        </fieldset>
        <div className="flex justify-end gap-2 items-center mt-4">
          <button
            type="button"
            onClick={handleCancel}
            className="btn btn-secondary rounded"
          >
            Cancel
          </button>
          <SubmitBtn myWidth="min-w-24">Apply Filter</SubmitBtn>
        </div>
      </form>
    </div>
  );
};

export default FiltersSection;
