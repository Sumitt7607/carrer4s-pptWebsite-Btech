import { useNavigate } from "react-router-dom";
import { admissionTypes } from "./data/admissionData";

const AdmissionCards = () => {
  const navigate = useNavigate();

  return (
 <section className="relative py-16 px-4 bg-[#0b0b0b]">

      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-saffron-darker">
          B.Tech Admission Process
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Explore different pathways to secure your B.Tech admission. Click on any card to learn more.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {admissionTypes.map((type) => {
            const Icon = type.icon;
            return (
              <div
                key={type.id}
                onClick={() => navigate(type.route)}
          className="group cursor-pointer rounded-2xl
bg-[#111] 
border border-saffron/40
p-6
shadow-[0_0_20px_rgba(255,153,51,0.15)]
transition-all duration-300
hover:scale-[1.05]
hover:border-saffron
hover:shadow-[0_0_40px_rgba(255,153,51,0.4)]"

              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-saffron-dark text-saffron-foreground transition-colors group-hover:bg-saffron">
                  <Icon className="h-7 w-7" />
                </div>
           <h3 className="mb-2 text-lg font-semibold text-white group-hover:text-saffron transition-colors">
                    {type.title}                                                                
                    </h3>
          <p className="text-sm text-gray-300 leading-relaxed">

                  {type.shortDescription}
                </p>
             <span className="mt-4 inline-flex items-center text-sm font-medium text-saffron group-hover:translate-x-1 transition-all">
  Learn more →
</span>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AdmissionCards;
