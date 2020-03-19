class CreateUsersLocations < ActiveRecord::Migration[5.2]
  def change
    create_table :users_locations do |t|
      t.integer :User_id
      t.integer :Location_id
    end
  end
end
