class CreateWords < ActiveRecord::Migration[7.0]
  def change
    create_table :words do |t|
      t.string :solution_word
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
