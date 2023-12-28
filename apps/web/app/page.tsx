import {
  BUTTON_COLORS,
  BUTTON_DESIGNS,
  BUTTON_SIZES,
} from "./components/library/atoms/button/button.constants";
import { Button } from "./components/library/atoms/button";
import ThemeSwitcher from "./components/shared/theme-swicher";

export default function Page(): JSX.Element {
  return (
    <main className="grid min-h-screen place-items-center">
      <ThemeSwitcher />
      {BUTTON_SIZES.map((size) => (
        <div key={size} className="flex flex-col items-center gap-4">
          <h3>Size: {size}</h3>
          <div className="grid grid-cols-[auto_repeat(8,_minmax(100px,_1fr))] gap-2">
            <div className="col-span-1"></div> {/* Empty top-left corner */}
            {BUTTON_COLORS.map((color) => (
              <div key={color} className="font-semibold text-center">
                {color}
              </div>
            ))}
            {BUTTON_DESIGNS.map((design) => (
              <>
                <div key={design} className="font-semibold">
                  {design}
                </div>
                {BUTTON_COLORS.map((color) => (
                  <div key={`${design}-${color}-button`}>
                    <Button color={color} design={design} size={size}>
                      Krafter UI
                    </Button>
                  </div>
                ))}
              </>
            ))}
          </div>
        </div>
      ))}
    </main>
  );
}
