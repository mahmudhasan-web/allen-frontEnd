'use client'

import Button from "@/Components/Common/Button/Button"
import { useUpdatePreferInterestMutation } from "@/Redux/Api/userApi"
// import Button from "@/Components/Common/button/Button"
// import button from "@/Components/Common/button/button"

import Cookies from "js-cookie"
import { useRouter } from "next/navigation"

interface updateData {
    familiarityType: string
    experienceEffect: string[]
    terpeneProfile: string[]
    differentCategories: string[]
    strain: string[]
    tasteFlavor: string[]
    oftenConsume: string
    typicallyConsume: string
    californiaProducts: string
    newProductsInDifferentCategory: string
    typicalProducts: string
    popularProducts: string
    staffFavorites: string
}

import { useState } from "react"

export default function VirtualBudtender() {

    const route = useRouter()
    const [updateFn] = useUpdatePreferInterestMutation()

    const [formData, setFormData] = useState<updateData>({
        familiarityType: "",
        experienceEffect: [],
        terpeneProfile: [],
        differentCategories: [],
        strain: [],
        tasteFlavor: [],
        oftenConsume: "",
        typicallyConsume: "",
        californiaProducts: "",
        newProductsInDifferentCategory: "",
        typicalProducts: "",
        popularProducts: "",
        staffFavorites: ""
    })




    const handleMultiSelect = (category: keyof updateData, value: string) => {
        setFormData((prev) => {
            const currentArray = prev[category] as string[];
            if (currentArray.includes(value)) {
                // Remove the value if it already exists
                return {
                    ...prev,
                    [category]: currentArray.filter((item) => item !== value),
                };
            } else {
                // Add the value if it doesn't exist
                return {
                    ...prev,
                    [category]: [...currentArray, value],
                };
            }
        });
    };

    const handleBudtender = async () => {

        console.log(formData)
        const { data, error } = await updateFn(formData)
        if (error) {
            console.log(error)
        }
        if (data) {
            console.log(data);
            Cookies.remove("token")
            route.push('/sign-in')
        }
    }

    return (
        <section className="w-full max-w-3xl mx-auto px-3">
            {/* <CardHeader>
        <CardTitle className="text-2xl font-bold">Cannabis Preferences Survey</CardTitle>
      </CardHeader> */}
            <div className="space-y-8">
                {/* Question 1 */}
                <div className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-lg font-medium">1. Familiarity with cannabis?</label>
                        <p className="text-sm text-muted-foreground">Select one</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {['BEGINNER', 'INTERMEDIATE', 'EXPERT'].map((option) => (
                            <button
                                key={option}
                                // variant={formData.familiarity === option ? "default" : "outline"}
                                className={`rounded-xl px-3 py-1 border ${formData.familiarityType === option.toUpperCase() ? "bg-color text-white" : "border-color"}`}
                                onClick={() => setFormData(prev => ({ ...prev, familiarityType: option.toUpperCase() }))}
                            // className="rounded-xl px-3 py-1 border"
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Question 2 */}
                <div className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-lg font-medium">2. What effects are you seeking from your experience?</label>
                        <p className="text-sm text-muted-foreground">Select all that apply</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {[
                            'ALL',
                            'SENSUAL',
                            'HUNGRY',
                            'CREATIVE',
                            'CALM',
                            'MINDFUL',
                            'MOTIVATED',
                            'ALERT',
                            'WORRIED',
                            'STONED',
                            'HAPPY',
                            'ENERGIZED',
                            'RELAXED',
                            'EUPHORIC',
                            'NULL'
                        ].map((effect) => (
                            <button
                                key={effect}
                                // variant={formData.effects.has(effect) ? "default" : "outline"}
                                onClick={() => handleMultiSelect('experienceEffect', effect.toUpperCase())}
                                className={`rounded-xl px-3 py-1 border ${formData.experienceEffect.includes(effect.toUpperCase()) ? "bg-color text-white" : "border-color"}`}
                            >
                                {effect}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Question 3 */}
                <div className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-lg font-medium">3. What is your favorite terpene profile?</label>
                        <p className="text-sm text-muted-foreground">Select all that apply</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {[
                            'ALL',
                            'APPLE',
                            'BANANA',
                            'BERRY',
                            'CANDY',
                            'EARTHY',
                            'FLORAL',
                            'GASSY',
                            'GRAPES',
                            'LEMON',
                            'MINT',
                            'NUTTY',
                            'ORANGE',
                            'PEACH',
                            'PEPPERY',
                            'PINE',
                            'STRAWBERRY',
                            'SWEET',
                            'WOOD'
                        ].map((terpene) => (
                            <button
                                key={terpene}
                                // variant={formData.terpenes.has(terpene) ? "default" : "outline"}
                                className={`rounded-xl px-3 py-1 border ${formData.terpeneProfile.includes(terpene.toUpperCase()) ? "bg-color text-white" : "border-color"}`}
                                onClick={() => handleMultiSelect('terpeneProfile', terpene.toUpperCase())}
                            // className="rounded-xl px-3 py-1 border"
                            >
                                {terpene}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Question 4 */}
                <div className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-lg font-medium">4. Which categories are you interested in?</label>
                        <p className="text-sm text-muted-foreground">Select all that apply</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {[
                            'ALL',
                            'FLOWER',
                            'EDIBLES',
                            'VAPES',
                            'CONCENTRATES',
                            'PREROLLS'
                        ].map((category) => (
                            <button
                                key={category}
                                // variant={formData.categories.has(category) ? "default" : "outline"}
                                className={`rounded-xl px-3 py-1 border ${formData.differentCategories.includes(category.toUpperCase()) ? "bg-color text-white" : "border-color"}`}
                                onClick={() => handleMultiSelect('differentCategories', category.toUpperCase())}
                            // className="rounded-xl px-3 py-1 border"
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Question 5 */}
                <div className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-lg font-medium">5. Which strain do you prefer?</label>
                        <p className="text-sm text-muted-foreground">Select all that apply</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {[
                            'INDICA',
                            'SATIVA',
                            'HYBRID',
                            'SATIVADOMINANT',
                            'INDICADOMINANT',
                            'NO'
                        ].map((strain) => (
                            <button
                                key={strain}
                                // variant={formData.strain === strain ? "default" : "outline"}
                                className={`rounded-xl px-3 py-1 border ${formData.strain.includes(strain.toUpperCase()) ? "bg-color text-white" : "border-color"}`}
                                onClick={() => handleMultiSelect('strain', strain.toUpperCase())}
                            // className="rounded-xl px-3 py-1 border"
                            >
                                {strain}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Question 6 */}
                <div className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-lg font-medium">6. How much does taste/flavor matter?</label>
                        <p className="text-sm text-muted-foreground">Select one</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {[
                            'ALOT',
                            'KINDOF',
                            'NOTATALL'
                        ].map((option) => (
                            <button
                                key={option}
                                // variant={formData.taste === option ? "default" : "outline"}
                                className={`rounded-xl px-3 py-1 border ${formData.tasteFlavor.includes(option.toUpperCase()) ? "bg-color text-white" : "border-color"}`}
                                onClick={() => handleMultiSelect('tasteFlavor', option.toUpperCase())}
                            // onClick={() => setFormData(prev => ({ ...prev, tasteFlavor: option.toUpperCase() }))}
                            // className="rounded-xl px-3 py-1 border"
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Question 7 */}
                <div className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-lg font-medium">7. How often do you consume?</label>
                        <p className="text-sm text-muted-foreground">Select one</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {[
                            'EVERYDAY',
                            'OFTEN',
                            'SOMETIMES',
                            'RARELY',
                            'NEVER'
                        ].map((option) => (
                            <button
                                key={option}
                                // variant={formData.frequency === option ? "default" : "outline"}
                                className={`rounded-xl px-3 py-1 border ${formData.oftenConsume === option.toUpperCase() ? "bg-color text-white" : "border-color"}`}
                                onClick={() => setFormData(prev => ({ ...prev, oftenConsume: option.toUpperCase() }))}
                            // className="rounded-xl px-3 py-1 border"
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Question 8 */}
                <div className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-lg font-medium">8. What time of day do you typically consume?</label>
                        <p className="text-sm text-muted-foreground">Select one</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {[
                            'DAYTIME',
                            'MIDDAY',
                            'NIGHTTIME',
                            'ANYTIME'
                        ].map((option) => (
                            <button
                                key={option}
                                // variant={formData.timeOfDay === option ? "default" : "outline"}
                                className={`rounded-xl px-3 py-1 border ${formData.typicallyConsume === option.toUpperCase() ? "bg-color text-white" : "border-color"}`}
                                onClick={() => setFormData(prev => ({ ...prev, typicallyConsume: option.toUpperCase() }))}
                            // className="rounded-xl px-3 py-1 border"
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Question 9 */}
                <div className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-lg font-medium">9. Do you prefer products grown locally over California products?</label>
                        <p className="text-sm text-muted-foreground">Select one</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {["YES", "NO"].map((option) => (
                            <button
                                key={option}
                                // variant={formData.localPreference === option ? "default" : "outline"}
                                className={`rounded-xl px-3 py-1 border ${formData.californiaProducts === option.toUpperCase() ? "bg-color text-white" : "border-color"}`}
                                onClick={() => setFormData(prev => ({ ...prev, californiaProducts: option.toUpperCase() }))}
                            // className="rounded-xl px-3 py-1 border"
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Question 10 */}
                <div className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-lg font-medium">10. Are you open to trying new products in different categories?</label>
                        <p className="text-sm text-muted-foreground">Select one</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {["YES", "NO"].map((option) => (
                            <button
                                key={option}
                                // variant={formData.newProducts === option ? "default" : "outline"}
                                className={`rounded-xl px-3 py-1 border ${formData.newProductsInDifferentCategory === option.toUpperCase() ? "bg-color text-white" : "border-color"}`}
                                onClick={() => setFormData(prev => ({ ...prev, newProductsInDifferentCategory: option.toUpperCase() }))}
                            // className="rounded-xl px-3 py-1 border"
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Question 11 */}
                <div className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-lg font-medium">11. What is your typical budget for products?</label>
                        <p className="text-sm text-muted-foreground">Select one</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {[
                            'HIGHEND',
                            'MIDRANGE',
                            'BUDGET',
                            'NOBUDGET'
                        ].map((option) => (
                            <button
                                key={option}
                                // variant={formData.budget === option ? "default" : "outline"}
                                className={`rounded-xl px-3 py-1 border ${formData.typicalProducts === option.toUpperCase() ? "bg-color text-white" : "border-color"}`}
                                onClick={() => setFormData(prev => ({ ...prev, typicalProducts: option.toUpperCase() }))}
                            // className="rounded-xl px-3 py-1 border"
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Question 12 */}
                <div className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-lg font-medium">12. Do you prefer popular products?</label>
                        <p className="text-sm text-muted-foreground">Select one</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {[
                            'YES',
                            'KINDOF',
                            'DOESNOTREALLYMATTER',
                            'NO'
                        ].map((option) => (
                            <button
                                key={option}
                                // variant={formData.popularProducts === option ? "default" : "outline"}
                                className={`rounded-xl px-3 py-1 border ${formData.popularProducts === option.toUpperCase() ? "bg-color text-white" : "border-color"}`}
                                onClick={() => setFormData(prev => ({ ...prev, popularProducts: option.toUpperCase() }))}
                            // className="rounded-xl px-3 py-1 border"
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Question 13 */}
                <div className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-lg font-medium">13. Would you like to know staff favorites?</label>
                        <p className="text-sm text-muted-foreground">Select one</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {["YES", "NO"].map((option) => (
                            <button
                                key={option}
                                // variant={formData.staffFavorites === option ? "default" : "outline"}
                                className={`rounded-xl px-3 py-1 border ${formData.staffFavorites === option.toUpperCase() ? "bg-color text-white" : "border-color"}`}
                                onClick={() => setFormData(prev => ({ ...prev, staffFavorites: option.toUpperCase() }))}
                            // className="rounded-xl px-3 py-1 border"
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                </div>

                <Button onClick={handleBudtender} className="w-full">
                    Submit Survey
                </Button>
            </div>
        </section>
    )
}

